# Obtener node desde el repositorio de docker
FROM node:16.5

# Crear carpeta si no existe
RUN mkdir -p /usr/src/app

# Moverme a la carpeta creada
WORKDIR /usr/src/app

# Copiar todos los archivos que comienzan por package dentro de la carpeta app
COPY package*.json ./

# Copiar directorio actual , dentro del contenedor actual
COPY  . . 
