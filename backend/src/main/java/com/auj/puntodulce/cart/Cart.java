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

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    private List<CartItem> items = new ArrayList<>();

    @Column(nullable = false)
    private int totalItems;

    @Column(nullable = false)
    private BigDecimal totalPrice;

    @PrePersist
    protected void onCreate() {
        if (this.id == null) {
            this.id = UUID.randomUUID();
        }
        if(this.totalPrice == null){
            this.totalPrice = BigDecimal.ZERO;
        }
    }

    public void addOrUpdateItem(Product product, int quantity) {
        Optional<CartItem> existingCartItem = items.stream()
                .filter(item -> item.getProduct().getId().equals(product.getId()))
                .findFirst();

        if (existingCartItem.isPresent()) {
            CartItem cartItem = existingCartItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            cartItem.setTotal(cartItem.getPrice().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        } else {
            CartItem cartItem = new CartItem(UUID.randomUUID(), this, product, quantity, product.getPrice(), product.getPrice().multiply(BigDecimal.valueOf(quantity)));
            items.add(cartItem);
        }

        recalculateTotals();
    }

    private void recalculateTotals() {
        totalItems = items.stream().mapToInt(CartItem::getQuantity).sum();
        totalPrice = items.stream()
                .map(CartItem::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
