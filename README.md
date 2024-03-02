## Microservicio Examen
***
Somos el equipo de desarrollo y necesitamos desplegar nuestro nuevo Microservicio.

Para compilar nuestro micro te adjuntamos el Dockerfile necesario y los ficheros src y package.json necesarios.

solamente necesitaras seguir las siguientes instrucciones

```
git clone [git@github.com:pps-ciberseguridad/microservicio.git](https://github.com/pps-ciberseguridad/microservicio.git)

docker build -t myapp:1.0 .
```
para arrancar el Microservicio necesitas tener una mysql:5.7 

las variables que espera nuestro microservicio son las siguientes:
```
      - DB_HOST= el host de la mysql
      - DB_USER= usuario de la mysql
      - DB_PASSWORD= contraseña del usuario
      - DB_NAME= nobre de la database
      - DB_PORT= puerto de la mysql
```
Nuestro microservicio es tan inteligente que no necesita importar ninguna bbdd por lo que no te tienes que preocupar en importar datos de la base de datos.

¡¡¡¡¡¡¡¡Enjoy Docker!!!!!!

![alt tag](https://s3-us-west-1.amazonaws.com/aerospike-fd/wp-content/uploads/2016/01/the_containers_are_coming.jpg)
