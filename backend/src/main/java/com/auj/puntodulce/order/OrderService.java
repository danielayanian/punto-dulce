package com.auj.puntodulce.order;

import com.auj.puntodulce.cart.CartDTO;
import com.auj.puntodulce.cart.CartService;
import com.auj.puntodulce.exception.CustomerDetailsNotFound;
import com.auj.puntodulce.exception.InvalidCartException;
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
    private final WholesaleDetailsDataAccessService wholeSaleDetailsDataAccessService;

    public OrderService(OrderDataAccessService orderDataAccessService, CustomerDetailsDataAccessService customerDetailsDataAccessService, CartService cartService, UserDataAccessService userDataAccessService, WholesaleDetailsDataAccessService wholeSaleDetailsDataAccessService) {
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
        WholesaleDetails wholesaleDetails = wholeSaleDetailsDataAccessService.findByUserId(userId).orElseThrow(()-> new CustomerDetailsNotFound("Customer details not found"));
        orderDataAccessService.createOrder(cartId, wholesaleDetails);
    }
    public WholesaleOrderPreviewResponse getPreviewOrder(UUID cartId, String userId) {
        CartDTO cart = cartService.getCart(cartId);
        if(cart.items().isEmpty()){
            throw new InvalidCartException("Cart is empty");
        }
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

    private static WholesaleOrderPreviewResponse getOrderPreviewResponse(User user, List<ProductPreview> products, CartDTO cart) {
        WholesaleDetailsPreview wholesaleDetailsPreview = null;
        if(user.getCustomerDetails() != null){
            WholesaleDetails wholesaleDetails = (WholesaleDetails) user.getCustomerDetails();
            wholesaleDetailsPreview = new WholesaleDetailsPreview();
            wholesaleDetailsPreview.setId(wholesaleDetails.getId());
            wholesaleDetailsPreview.setFullName(wholesaleDetails.getFullName());
            wholesaleDetailsPreview.setAddress(wholesaleDetails.getAddress());
            wholesaleDetailsPreview.setNeighborhood(wholesaleDetails.getNeighborhood());
            wholesaleDetailsPreview.setPhone(wholesaleDetails.getPhone());
            wholesaleDetailsPreview.setVatCondition(wholesaleDetails.getVatCondition());
            wholesaleDetailsPreview.setCompanyName(wholesaleDetails.getCompanyName());
            wholesaleDetailsPreview.setTaxId(wholesaleDetails.getTaxId());
        }

        WholesaleOrderPreviewResponse response = new WholesaleOrderPreviewResponse();
        response.setProducts(products);
        response.setTotalPriceMajor(cart.totalPriceMajor());
        response.setEmail(user.getEmail());
        response.setCustomerDetails(wholesaleDetailsPreview);
        return response;
    }
}
