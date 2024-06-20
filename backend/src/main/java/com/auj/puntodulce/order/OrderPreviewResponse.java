package com.auj.puntodulce.order;

import com.auj.puntodulce.user.CustomerDetails;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderPreviewResponse {
        private List<ProductPreview> products;
        private BigDecimal totalPriceMinor;
        private BigDecimal totalPriceMajor;
        private String email;
        private List<CustomerDetailsPreview> customerDetails;
}
