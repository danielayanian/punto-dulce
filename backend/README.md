
# PuntoDulce API

Este proyecto es un e-commerce para una distribuidora de golosinas que utiliza Spring Boot para el backend. El siguiente documento describe cómo configurar y ejecutar la API para desarrollo y pruebas.

## Prerrequisitos

Asegúrate de tener instalado [Docker y Docker Compose](https://www.docker.com/products/docker-desktop) en tu máquina para poder ejecutar los contenedores necesarios para la API.

## Configuración

**Clona el repositorio:**
Asegúrate de tener acceso al repositorio del proyecto y clona el código en tu máquina local utilizando Git, situate en la rama `dev`.

   ```bash
   git clone https://github.com/xpan1c/punto-dulce.git
   ```

   ```bash
   cd punto-dulce/backend
   ```


Antes de levantar los servicios, necesitarás configurar las variables de entorno que utilizan los contenedores. Crea un archivo `.env` en el directorio raíz del proyecto con el siguiente contenido:

```env
MYSQL_ROOT_PASSWORD=TuContraseñaRoot
MYSQL_DATABASE=puntodulce
MYSQL_USER=usuario
MYSQL_PASSWORD=TuContraseña
```

Reemplaza `TuContraseñaRoot`, `usuario` y `TuContraseña` con los valores que desees para la configuración de tu base de datos MySQL.

## Levantar los servicios

Para construir y levantar todos los servicios necesarios (MySQL, phpMyAdmin y la aplicación Spring Boot), ejecuta el siguiente comando en el directorio raíz del proyecto:

```bash
docker compose up -d
```

Este comando construirá la imagen de la aplicación Spring Boot y levantará todos los servicios definidos en el archivo `compose.yml`. Puede tomar unos minutos completar este proceso la primera vez que se ejecuta.

## Verificación

Una vez que los servicios estén funcionando, puedes acceder a los siguientes puertos en tu navegador:

- **Spring Boot Application**: http://localhost:8080
- **phpMyAdmin**: http://localhost:8081

Utiliza phpMyAdmin para interactuar con la base de datos MySQL a través de la interfaz web. Puedes usar las credenciales proporcionadas en tu archivo `.env` para iniciar sesión.

## Detener los servicios

Para detener todos los servicios, puedes usar el siguiente comando:

```bash
docker compose down
```

Este comando detiene y elimina todos los contenedores, redes y volúmenes asociados a los servicios definidos en el `compose.yml`.
