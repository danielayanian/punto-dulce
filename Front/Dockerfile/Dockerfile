# Usa la imagen oficial de Node.js versión 16
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que tu aplicación va a correr
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "run", "dev"]
