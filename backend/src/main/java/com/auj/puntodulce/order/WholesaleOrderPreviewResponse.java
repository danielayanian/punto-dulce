package com.auj.puntodulce.order;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class WholesaleOrderPreviewResponse {
        private List<ProductPreview> products;
        private BigDecimal totalPriceMajor;
        private String email;
        private WholesaleDetailsPreview customerDetails;
}
