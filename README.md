# Ecommerce mi-tienda
    Autor: Pablo Arce
    Contacto: parcepaiva@gmail.com

## Link proyecto
[link Demo](https://pf-react-arce.vercel.app/) Aca puede ver un demo de la aplicacion 
[link Video](https://drive.google.com/file/d/1dzHsbk6e1m_5PHxu_AGwNBhJEwp5eEEi/view?usp=drive_link) Aca se puede ver un video de la aplicacion.




## Descripcion del proyecto

    Este proyecto tiene fines educativos dado que es solicitado en el curso React js de CODERHOUSE 
    Fue creado con create-react-app y es un e-commerce manejado con una BBDD de firebase
    Además se ocuparon distintas librerias como: react-router-dom, react-tostify, chakra-UI, react-icons y reactstrap. 


### Componentes

    -Assets: incluye una imagen que es el icono del logo de la tienda que va en el Navbar

    -Cart: importa el cart del CartContext y lo mapea usando el presentacional CartItem; si no hay nada en el cart muestra que no hay nada en el carrito

    -CartItem: es el presentacional del componente Cart

    -CartWidget: importa el totalUnidades del CartContext y lo muestra al lado de un carrito de react-icons

    -Checkout: Contiene la logica asociada a la creacion de ordenes de compra y almacenamiento de las mismas en la Firebase.

    -CheckoutForm: Es el formulario el cual presenta inputs para el ingreso de la informacion de la orden de compra

    -Footer: es el componente footer mostrado alfinal de la pagina 

    -Item: es el presentacional de ItemList

    -ItemCount: maneja la logica del contador del ItemDetail, esta creado con chackra UI.

    -ItemDetail: Recibe los items enviados desde ItemDetailContainer y los renderiza, además usa el componente ItemCount para manejar la cantidad que se quiere agregar al carrito del Item.

    -ItemDetailContainer:  Maneja el detalle de los item y los muestra a través de su presentacion ItemDetail

    -ItemList: Recibe los items enviados desde ItemListContainer y hace un mapeo de ellos, renderizandolos uno a uno con su componente presentacional Item

    -ItemListContainer: Maneja la lista de items que deben ser mostrados en cada categoria de la pagina y los muestra a traves de un mapeo hecho en el componente ItemList y que finalmente se renderiza en el presentacional Item

    -Loader: es un componente creado con reactstrap y es mostrado mientras la pagina carga, esperando la respuesta de peticiones a firebase

    -Navbar: es un componente que se muestra en la parte superior de la aplicacion web y permite navegar por la pagina, maneja NavLinks de react-router-dom  y un CartWidget que usa el context para saber cuantos productos hay en el carrito. 

    
### Tecnologias usadas

    - react-router-dom: utilizada para el enrutamiento de la pagina y poder navegar dentro de la misma en modalidad SPA (single page application)

    - react-toastify: utilizada para notificaciones personalizadas(reemplaza a los alert()), como ejemplos de uso: cuando un proceso fallo o cuando se agrego o quito un item, etc.

    -chakra-provider: es una libreria de diseño, utilizada para el diseño de diferentes componentes como el itemCount, donde se uso : Button, Stack, Box de chackra

    -react-icons: es una biblioteca de iconos, este se uso para incorporar el icono del carrito de compras en el cartWidget

    -reacstrap: es una biblioteca de componentes UI, se uso en el presente proyecto para incoporar un Spinner que funciona en el Loader, que es un componente que se muestra mientras se hacen consultas a la base de datos. Importante: reactstrap requiere tener instalado bootstrap.
