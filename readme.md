# Chat converter!

El siguiente proyecto consta de un chat realizado con Node.js y React JS, como tecnologías principales, los requisitos del chat son los siguientes:

 - [x] Implementar un chat peer to peer 
 - [x] Debe permitir a los usuarios convertir pesos a dolares
 - [ ] Loguear  en una BD todas las consultas de conversión realizadas a través del chat.
 
## Backend

El **Backend** ha sido realizado en NodeJs, utilizando frameworks como Express y Socket.io, los cuales proveen un servicio en tiempo real, disponible 24/7

## Frontend

El **Frontend** ha sido realizado en ReactJS, junto con la librería TailwindCSS para escribir CSS de forma rápida y práctica

# Correr el proyecto en modo desarrollo

## Ejecutar Backend

1. Entramos a la consola en la raíz del proyecto, y escribimos los siguientes comandos
   - cd ./backend
   - yarn o npm install
   - yarn dev o npm run dev
   
2. Ingresamos a http://localhost:5000

## Ejecutar Frontend

1. Entramos a la consola en la raíz del proyecto, y escribimos los siguientes comandos
   - cd ./frontend
   - yarn o npm install
   - yarn start o npm start
   
2. Ingresamos a http://localhost:3000

# Dependencias utilizadas
## Backend
 1. express
 2. node-fetch
 3. socket.io
 4. cors

## Frontend
1. ReactJS
2. TailwindCSS
3. socket.io-client
4. uuid