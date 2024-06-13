package com.auj.puntodulce.cart;

import com.auj.puntodulce.product.Product;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;

import java.math.BigDecimal;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Entity(name = "carts")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @Column(name = "id")
    @JdbcTypeCode(Types.VARCHAR)
    private UUID id;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<CartItem> items = new ArrayList<>();

    @Column(nullable = false)
    private int totalItems;

    @Column(nullable = false)
    private BigDecimal totalPriceMinor;

    @Column(nullable = false)
    private BigDecimal totalPriceMayor;

    @PrePersist
    protected void onCreate() {
        if (this.id == null) {
            this.id = UUID.randomUUID();
        }
        if(this.totalPriceMinor == null){
            this.totalPriceMinor = BigDecimal.ZERO;
        }
        if(this.totalPriceMayor == null){
            this.totalPriceMayor = BigDecimal.ZERO;
        }
    }

    public void addOrUpdateItem(Product product, int quantity) {
        Optional<CartItem> existingCartItem = items.stream()
                .filter(item -> item.getProduct().getId().equals(product.getId()))
                .findFirst();

        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            if(quantity == 0){
                removeItem(product.getId());
            }
            cartItem.setQuantity(quantity);
            cartItem.setTotalPriceMinor(cartItem.getTotalPriceMinor().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
            cartItem.setTotalPriceMayor(cartItem.getTotalPriceMayor().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        } else {
            CartItem cartItem = new CartItem(UUID.randomUUID(), this,null, product, quantity, product.getPriceMinor().multiply(BigDecimal.valueOf(quantity)), product.getPriceMayor().multiply(BigDecimal.valueOf(quantity)));
            items.add(cartItem);
        }

        recalculateTotals();
    }

    public void removeItem(UUID productId) {
        items.removeIf(item -> item.getProduct().getId().equals(productId));
        recalculateTotals();
    }
    public void removeAllItems(){
        items.clear();
        recalculateTotals();
    }

    public void recalculateTotals() {
        totalItems = items.stream().mapToInt(CartItem::getQuantity).sum();
        totalPriceMinor = items.stream()
                .map(CartItem::getTotalPriceMinor)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        totalPriceMayor = items.stream()
                .map(CartItem::getTotalPriceMayor)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
