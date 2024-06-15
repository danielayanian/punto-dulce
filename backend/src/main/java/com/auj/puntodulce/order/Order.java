package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartItem;
import com.auj.puntodulce.enums.Status;
import com.auj.puntodulce.user.CustomerDetails;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name="orders")
public class Order {
	
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(length = 36)
    private String id;
	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	@ToString.Exclude
	private List<CartItem> items;
	@Column(name = "created_at")
    private Date createdAt;
    @Column(name = "total_price")
    private BigDecimal totalPrice;
    private Status status;


	@Override
	public final boolean equals(Object o) {
		if (this == o) return true;
		if (o == null) return false;
		Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
		Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
		if (thisEffectiveClass != oEffectiveClass) return false;
		Order order = (Order) o;
		return getId() != null && Objects.equals(getId(), order.getId());
	}

	@Override
	public final int hashCode() {
		return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
	}
}
