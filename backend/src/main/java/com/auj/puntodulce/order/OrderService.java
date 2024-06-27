package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartDTO;
import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.product.ProductDTO;
import com.auj.puntodulce.user.*;
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
    private final WholeSaleDetailsDataAccessService wholeSaleDetailsDataAccessService;

    public OrderService(OrderDataAccessService orderDataAccessService, CustomerDetailsDataAccessService customerDetailsDataAccessService, CartService cartService, UserDataAccessService userDataAccessService, WholeSaleDetailsDataAccessService wholeSaleDetailsDataAccessService) {
        this.orderDataAccessService = orderDataAccessService;
        this.customerDetailsDataAccessService = customerDetailsDataAccessService;
        this.cartService = cartService;
        this.userDataAccessService = userDataAccessService;
        this.wholeSaleDetailsDataAccessService = wholeSaleDetailsDataAccessService;
    }
    @Transactional
    public void confirmOrderRetailer(UUID cartId,
                                      String userId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
//        CustomerDetails customerDetails = customerDetailsDataAccessService.create(checkoutWholeSaleRequest, userId);
//        orderDataAccessService.createOrder(cartId, customerDetails);
    }
    @Transactional
    public void confirmOrderWholesale(UUID cartId, String userId) {

        // Validate cart one more time to ensure no changes have occurred since last validation
        cartService.validateCart(cartId);

        // Process payment (this is a placeholder for actual payment processing logic)

        // Get current authenticated user if available

        // Create order from cart
        WholesaleDetails wholesaleDetails = wholeSaleDetailsDataAccessService.findByUserId(userId).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        orderDataAccessService.createOrder(cartId, wholesaleDetails);
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


        return getOrderPreviewResponse(user, products, cart);
    }

    private static OrderPreviewResponse getOrderPreviewResponse(User user, List<ProductPreview> products, CartDTO cart) {
        CustomerDetailsPreview customerDetailsPreview = new CustomerDetailsPreview();
        customerDetailsPreview.setId(user.getCustomerDetails().getId());
        customerDetailsPreview.setFullName(user.getCustomerDetails().getFullName());
        customerDetailsPreview.setPhone(user.getCustomerDetails().getPhone());
        customerDetailsPreview.setAddress(user.getCustomerDetails().getAddress());
        customerDetailsPreview.setNeighborhood(user.getCustomerDetails().getNeighborhood());

        OrderPreviewResponse response = new OrderPreviewResponse();
        response.setProducts(products);
        response.setTotalPriceMinor(cart.totalPriceMinor());
        response.setTotalPriceMajor(cart.totalPriceMajor());
        response.setEmail(user.getEmail());
        response.setCustomerDetails(customerDetailsPreview);
        return response;
    }
}
