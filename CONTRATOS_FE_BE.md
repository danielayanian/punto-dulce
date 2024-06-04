### 1. Listar Productos
**Endpoint: GET /api/v1/products**

**Solicitud:**
```
GET /api/v1/products?category=chocolates
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  [
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "name": "Chocolate Kinder",
        "description": "Chocolate Kinder Barrita individual T1 x 24",
        "image": "url_imagen_producto",
        "price": 10180.00,
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
    "code": "8000500125038",
    "name": "Chocolate Kinder Barrita",
    "description": "Chocolate Kinder Barrita individual T1 x 24",
    "category": "Chocolate",
    "brand": "Kinder-Ferrero Rocher- Tic Tac",
    "image": "url_imagen_producto",
    "price": 10180.00,
    "supplier": "Piantoni"
  }
  ```
- **404 Not Found** (producto no encontrado)
  ```json
  {
    "error": "Producto no encontrado"
  }
  ```

### 3. Agregar Producto al Carrito
**Endpoint: POST /api/v1/cart/{productId}**

**Solicitud:**
```
POST /api/v1/cart/123e4567-e89b-12d3-a456-426614174000&quantity=1
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
  {
      "items": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "quantity": 1,
          "price": 10180.00,
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
        "name": "Chocolate Kinder Barrita",
        "description": "Chocolate Kinder Barrita individual T1 x 24",
        "code": "8000500125038",
        "quantity": 1,
        "price": 10180.00,
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
**Endpoint: PUT /api/v1/cart/{productId}**

**Solicitud:**
```
PUT /api/v1/cart/123e4567-e89b-12d3-a456-426614174000&quantity=2
```

**Respuesta:**
- **200 OK** (éxito)
  ```json
    {
      "items": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "quantity": 2,
          "price": 10180.00,
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

### 8. Registro de Usuario (Sign Up)
**Endpoint: POST /api/v1/auth/signup**

**Solicitud:**
```
POST /api/v1/auth/signup
```
**Cuerpo de la solicitud:**
```json
{
  "email": "usuario@example.com",
  "name": "usuario",
  "password": "passwordSegura",
  "confirmPassword": "passwordSegura"
}
```

**Respuesta:**
- **201 Created** (registro exitoso)

- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```
- **409 Conflict** (email o username ya existen)
  ```json
  {
    "error": "El email o nombre de usuario ya existe"
  }
  ```

### 9. Inicio de Sesión (Sign In)
**Endpoint: POST /api/v1/auth/signin**

**Solicitud:**
```
POST /api/v1/auth/signin
```
**Cuerpo de la solicitud:**
```json
{
  "email": "usuario@example.com",
  "password": "passwordSegura"
}
```

**Respuesta:**
- **204 OK** (inicio de sesión exitoso, se establece una cookie HTTPS)
  
  **Encabezados de la respuesta:**
  ```
  Set-Cookie: token=<JWT>; HttpOnly; Secure; SameSite=Strict
  ```
- **400 Bad Request** (parámetros inválidos)
  ```json
  {
    "error": "Parámetros inválidos"
  }
  ```
- **401 Unauthorized** (credenciales incorrectas)
  ```json
  {
    "error": "Credenciales incorrectas"
  }
  ```

### 10. Cerrar Sesión (Log Out)
**Endpoint: POST /api/v1/auth/logout**

**Solicitud:**
``POST /api/v1/auth/logout``

**Respuesta:**
- **204 OK** (cierre de sesión exitoso, la cookie se elimina)

  **Encabezados de la respuesta:**
  ```
  Set-Cookie: token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0
  ```
