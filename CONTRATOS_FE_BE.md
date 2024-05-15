
### 1. Listar Productos
**Endpoint: GET /api/v1/products**

**Solicitud:**
```
GET /api/v1/products?categoria=chocolates
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  [
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "codigo": "8000500125038",
        "descripcion": "Chocolate Kinder Barrita individual T1 x 24",
        "categoria": "Chocolate",
        "marca": "Kinder-Ferrero Rocher- Tic Tac",
        "imagen": "url_imagen_producto",
        "precio": 10180.00,
        "proveedor": "Piantoni"
      },
      ...
    ]
  ```
- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```

### 2. Obtener Detalle de Producto
**Endpoint: GET /api/v1/products/{id}**

**Solicitud:**
```
GET /api/v1/products/123e4567-e89b-12d3-a456-426614174000
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "codigo": "8000500125038",
    "descripcion": "Chocolate Kinder Barrita individual T1 x 24",
    "categoria": "Chocolate",
    "marca": "Kinder-Ferrero Rocher- Tic Tac",
    "imagen": "url_imagen_producto",
    "precio": 10180.00,
    "proveedor": "Piantoni"
  }
  ```
- **404 Not Found** (producto no encontrado)
  ```json
  {
    "error": "Producto no encontrado"
  }
  ```

### 3. Agregar Producto al Carrito
**Endpoint: POST /api/v1/cart**

**Solicitud:**
```
POST /api/v1/cart?id=123e4567-e89b-12d3-a456-426614174000&cantidad=1
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  {
      "items": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "cantidad": 1,
          "precio": 10180.00,
          "total": 10180.00
        }
      ],
      "totalItems": 1,
      "totalPrice": 10180.00
    }
  ```
- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```
- **404 Not Found** (producto no encontrado)
  ```json
  {
    "error": "Producto no encontrado"
  }
  ```

### 4. Ver Carrito
**Endpoint: GET /api/v1/cart**

**Solicitud:**
```
GET /api/v1/cart
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  {
    "items": [
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "descripcion": "Chocolate Kinder Barrita individual T1 x 24",
        "cantidad": 1,
        "precio": 10180.00,
        "total": 10180.00
      }
    ],
    "totalItems": 1,
    "totalPrice": 10180.00
  }
  ```
- **404 Not Found** (carrito no encontrado)
  ```json
  {
    "error": "Carrito no encontrado"
  }
  ```

### 5. Actualizar Cantidad en el Carrito
**Endpoint: PUT /api/v1/cart**

**Solicitud:**
```
PUT /api/v1/cart?id=123e4567-e89b-12d3-a456-426614174000&cantidad=2
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
    {
      "items": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "codigo": "8000500125038",
          "descripcion": "Chocolate Kinder Barrita individual T1 x 24",
          "cantidad": 2,
          "precio": 10180.00,
          "total": 20360.00
        }
      ],
      "totalItems": 1,
      "totalPrice": 20360.00
    }
  ```
- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```
- **404 Not Found** (producto no encontrado en el carrito)
  ```json
  {
    "error": "Producto no encontrado en el carrito"
  }
  ```

### 6. Eliminar Producto del Carrito
**Endpoint: DELETE /api/v1/cart/{id}**

**Solicitud:**
```
DELETE /api/v1/cart/123e4567-e89b-12d3-a456-426614174000
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
    {
      "items": [],
      "totalItems": 0,
      "totalPrice": 0.00
    }
  ```
- **404 Not Found** (producto no encontrado en el carrito)
  ```json
  {
    "error": "Producto no encontrado en el carrito"
  }
  ```

### 7. Realizar Compra
**Endpoint: POST /api/v1/checkout**

**Solicitud:**
```
POST /api/v1/checkout?address=Dirección+de+envío
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  {
    "orderId": "123e4567-e89b-12d3-a456-426614174000",
    "totalPrice": 20360.00
  }
  ```
- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```
- **404 Not Found** (carrito no encontrado)
  ```json
  {
    "error": "Carrito no encontrado"
  }
  ```
