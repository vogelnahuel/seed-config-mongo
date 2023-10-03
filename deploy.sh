#!/bin/bash

# Construir la imagen de Docker
docker build -t atenea-ms-config .

# Detener y eliminar el contenedor si ya está en ejecución
docker stop container-atenea-ms-config
docker rm container-atenea-ms-config


# Ejecutar el contenedor Docker
docker run -d -p 33021:33021 --name container-atenea-ms-config atenea-ms-config
