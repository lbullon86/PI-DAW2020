# Proyecto final de grado DAW 2020

Proyecto desarrollado para la entrega de Grado Superior de Desarrollo de Aplicaciones Web. 
Es una aplicación desarrollada en Node para la parte back, mediante el framework Nest, y para la parte front desarrollada con Angular. 
La base de datos está en MySql. 

# Objetivo

La aplicación está diseñada para el uso en un estudio de **Pilates** con el uso para la parte administrativa del negocio. Gestión de clientes, gestión de pagos, clases, estructura de cajas, gestión de horarios... 

## Principales Objetivos

-Desarrollo de una base de datos de los clientes.
-Gestión de los pagos e impagos.
-Gestión de los tipos de clases actuales.
-Gestión del horario de clases.
-Gestión de caja, tanto diaria como intervalo de tiempos.
-Gestión de gastos de la empresa.
-Gestión de asistencia a los bonos por parte de los clientes.

## Tecnologías

Para la parte de desarrollo como he comentado con anterioridad la he desarrollado la parte back a través del framework **Nest**  de **Node**. Es un framework muy potente y cómodo sobre todo para la estructuración de la base de datos y podes manejarla sobre la marcha, ya que gracias al typeorm da muchas posibilidades de evolucionarla a lo largo del tiempo.

Para la parte front he utilizado el framework  **Angular**, y el uso de un par de librerías para desarrollar sobre todo la parte de diseño como son la librería de **Material**, y una para los gráficos como es **Ngx**.
La base de datos está escrita en **mysql**.

# Puesta en marcha

Para comenzar a funcionar la aplicación hay que realizar los siguientes comandos para la instalación de las distintas tecnologías:
- Instalación de Node
>sudo apt install nodejs

- Instalación del cliente npm
>sudo apt install npm
- Instalación de Angular.
>sudo npm install -g @angular/cli
- Instalación librería de Material.
> ng add @angular/material
- Instalación de librería de Ngx.
>npm install @swimlane/ngx-charts --save
- Instalación de actualizador de librerías.
>npm install -g npm-check-updates

Una vez teniendo esto en marcha, tendremos que crear nuestra propia base de datos dentro de mysql. Y en el archivo database.env, introducir los parametros correspondientes al nombre de la base de datos, contraseña y usuario(user,pass,database). 
Una vez hecho esto, crear la base de datos vacía en mysql con el nombre acordado.

# Despliegue Local

Para desplegarlo de manera local, solo tendremos que realizar dos comandos:
- >npm run start:dev

Lo cual nos levanta la parte Back. Este comando lo tendremos que realizar desde la propia carpeta Back.

- >npm start

Desde la carpeta Front, para levantar Angular. Con esto tendremos nuestra aplicación en local. Levantanda en los puertos 3000 y 4200 respectivamente.

# Despliegue AWS

Yo en mi caso también la he desplegado a través Elastic Beanstalk y Rds de AWS. 
Para ello, tenemos que hacer dos partes. 
En primer lugar vamos a abrir una RDS, que no es otra cosa que un sitio que da soporte para una mysql. 

![Captura de pantalla de 2020-06-17 01-24-15](https://user-images.githubusercontent.com/44227459/84838144-ec29ac80-b039-11ea-9032-c2310c4d19b5.png)

Una vez desarrollada la base de datos, ya sólo queda crear el Beanstalk, para Nodejs, que es la base que necesitamos nosotros para poder desarrollarla. 

Una vez que ha creado el entorno, solo nos queda subir nuestro proyecto. Pero para ello lo vamos a compilar. 
Para ello, solo habría que desarrollar el [script.sh](https://github.com/lbullon86/test/blob/master/script.sh) creado.
En este script, compilamos, primero el front. Esa compilación la pasamos al back dist Back. 
Compilamos el Back. Y una vez todo compilado se crea un zip en la carpeta dist de Back.

Ese archivo lo subimos, y se despliega la app, creando un endpoint. 

![Captura de pantalla de 2020-06-17 01-34-09](https://user-images.githubusercontent.com/44227459/84838430-b6d18e80-b03a-11ea-9171-4f111d08d2f1.png)

