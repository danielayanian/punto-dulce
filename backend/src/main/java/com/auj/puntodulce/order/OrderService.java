package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartDTO;
import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.product.ProductDTO;
import com.auj.puntodulce.user.CustomerDetails;
import com.auj.puntodulce.user.CustomerDetailsDataAccessService;
import com.auj.puntodulce.user.User;
import com.auj.puntodulce.user.UserDataAccessService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final OrderDataAccessService orderDataAccessService;
    private final CustomerDetailsDataAccessService customerDetailsDataAccessService;
    private final CartService cartService;
    private final UserDataAccessService userDataAccessService;

    public OrderService(OrderDataAccessService orderDataAccessService, CustomerDetailsDataAccessService customerDetailsDataAccessService, CartService cartService, UserDataAccessService userDataAccessService) {
        this.orderDataAccessService = orderDataAccessService;
        this.customerDetailsDataAccessService = customerDetailsDataAccessService;
        this.cartService = cartService;
        this.userDataAccessService = userDataAccessService;
    }
    @Transactional
    public void confirmOrder(UUID cartId, CheckoutRequest checkoutRequest,
                             String userId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
        CustomerDetails customerDetails = customerDetailsDataAccessService.create(checkoutRequest, userId);
        orderDataAccessService.createOrder(cartId, customerDetails);
    }
    @Transactional
    public void confirmOrder(UUID cartId, UUID customerDetailsId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
        CustomerDetails customerDetails = customerDetailsDataAccessService.findById(customerDetailsId);
        orderDataAccessService.createOrder(cartId, customerDetails);
    }
    public OrderPreviewResponse getPreviewOrder(UUID cartId, String userId) {
        CartDTO cart = cartService.getCart(cartId);
        User user = userDataAccessService.selectUserById(userId).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        List<ProductPreview> products = cart.items().stream().map(item -> {
            ProductDTO product = item.product();
            ProductPreview productPreview = new ProductPreview();
            productPreview.setName(product.name());
            productPreview.setImage(product.image());
            return productPreview;
        }).collect(Collectors.toList());

        List<CustomerDetailsPreview> customerDetails = user.getCustomerDetails().stream().map(details -> {
            CustomerDetailsPreview customerDetailsPreview = new CustomerDetailsPreview();
            customerDetailsPreview.setId(details.getId());
            customerDetailsPreview.setFullName(details.getFullName());
            customerDetailsPreview.setPhone(details.getPhone());
            customerDetailsPreview.setAddress(details.getAddress());
            customerDetailsPreview.setApartment(details.getApartment());
            customerDetailsPreview.setNeighborhood(details.getNeighborhood());
            return customerDetailsPreview;
        }).collect(Collectors.toList());

        OrderPreviewResponse response = new OrderPreviewResponse();
        response.setProducts(products);
        response.setTotalPriceMinor(cart.totalPriceMinor());
        response.setTotalPriceMajor(cart.totalPriceMajor());
        response.setEmail(user.getEmail());
        response.setCustomerDetails(customerDetails);

        return response;
    }
}
