                                                          # Trabajo Practico N° 3
                                                       ## Diseño web: hojas de estilo
**Parte teorica**

1) ¿Qué significa que los estilos se apliquen en cascada? ¿Cómo aplica la herencia de estilos? 
Las hojas de estilo se llaman hojas de estilo "en cascada" porque:
-las propiedades de estilo pueden estar escritas en varios sitios (en varios lugares de la página web o de la hoja de estilo) y dependiendo del sitio, afectan a más o menos elementos. 
-Cuando un elemento está contenido en otro (por ejemplo, un párrafo <p> dentro de una división <div>), al elemento de dentro se le aplican también las propiedades definidas para el elemento de fuera (al párrafo <p> se le aplicarían las propiedades definidas para la división <div>).
-Dos reglas distintas pueden ser de aplicación a un mismo elemento (por ejemplo, a un párrafo <p> con clase nombre, le es de aplicación tanto el selector .nombre como el selector p).

Si las propiedades (escritas en diferentes sitios o para diferentes elementos) no entran en conflicto, el navegador aplica todas las propiedades. Por ejemplo, si el color de fondo de un elemento está definido en un sitio y el tamaño de letra en otro sitio, el navegador aplicará ambas propiedades al elemento. Pero si las propiedades entran en conflicto (por ejemplo, el color del fondo del elemento está definido en varios sitios con colores distintos), existen reglas para decidir qué propiedad tiene preferencia.
    Las propiedades de estilo pueden aparecer en tres lugares distintos:

    1.	en un archivo distinto a la página web (el archivo recibe el nombre de hoja de estilo). En ese caso, la página web debe incluir un enlace (<link>) a la hoja de estilo. Las propiedades definidas en una hoja de estilo se aplican en todas las páginas web que enlacen a la misma hoja de estilo.
    EJ: <head>
    <link rel="stylesheet" type="text/css" href="style.css" title="Mi estilo">
    </head>
    2.	en la etiqueta <style> situada al principio de la página web (concretamente, en el bloque <head>)
    En ese caso, la página web debe incluir una etiqueta <style> que contenga las propiedades de estilo. Las propiedades definidas en la etiqueta <style> se aplican únicamente en la página que contiene a la etiqueta <style>.
    EJ: <head>
      <style>
          body { background-color: red; }
    </style>
    </head>
    3.	en el atributo style de cualquier elemento. En ese caso, el elemento debe incluir el atributo style. Las propiedades definidas en el atributo style de un elemento se aplican únicamente al elemento en el que se ha definido la etiqueta style.
    EJ: <p style="background-color:red">Este párrafo tiene el fondo de color rojo</p>

    Si se define la misma propiedad para la misma etiqueta con el mismo selector en dos sitios distintos, las reglas de precedencia son las siguientes:
    Las propiedades definidas en un atributo style se imponen a las propiedades definidas en la etiqueta <style>.
    Las propiedades definidas en la etiqueta <style> se imponen a las propiedades definidas en una hoja de estilo enlazada.
    Las propiedades definidas en un atributo style se imponen a las propiedades definidas en una hoja de estilo enlazada.
    Además de estas propiedades definidas por el creador de la página web, hay que tener en cuenta que también se aplican las propiedades definidas en la hoja de estilo por defecto del navegador.
    Si las propiedades se encuentran definidas en diferentes hojas de estilo, el navegador aplica el valor definido en la última hoja de estilo enlazada (es decir, en el último enlace <link> del <head>).

    La herencia en CSS es la última pieza que necesitamos conocer para tener la información completa y comprender qué estilo se aplicará a un elemento. La idea es que unos elementos se heredarán por los elementos hijos, y otros no.

    Por ejemplo, tiene sentido que font-family y color sean heredadas, ya que nos facilita establecer un tipo de fuente básico aplicando una familia de fuentes al elemento <html>; después podemos reemplazar las fuentes de elementos individuales si es necesario. De esta forma nos ahorramos el tener que establecer la fuente base para cada elemento por separado.

    Otro ejemplo: tiene sentido que margin, padding, border, y background-image NO se hereden. Sería un lio de formato/estilo si aplicáramos estas propiedades en un elemento y éste fuera heredado por todos y cada uno de sus hijos, y después tener que "desaplicarlas" a todos los elementos también.
    Las propiedades que se heredan por defecto y las que no, vienen marcadas en gran medida por el sentido común. Pero para estar seguros podemos consultar la Referencia CSS — cada propiedad viene en una página que comienza con una tabla resumen que incluye diversos detalles sobre cada elemento, incluyendo si se hereda o no.

    CSS dispone de tres valores especiales para manejar las herencias:
    -inherit: Este valor establece el valor de la propiedad de un elemento seleccionado en el mismo que su elemento padre.
    -initial: Este valor establece el valor de la propiedad de un elemento seleccionado en el valor por defecto que establece la hoja de estilos del navegador, si este no existe, la propiedad se hereda naturalmente, adoptando el valor de inherit.
    -unset: Este valor reestablece la propiedad a su valor natural, esto es: si la propiedad se hereda de forma natural entonces actuará como inherit, sino, actuará como initial.

2) ¿Por qué es necesario utilizar un CSS de Reset? 
Los Reset CSS son unas hojas de estilo en cascada que se suelen incluir al comienzo de un documento HTML, su uso es necesario para minimizar, en la medida de lo posible, las múltiples diferencias visuales que se dan a la hora de mostrar una misma página web en diferentes navegadores, causa de que cada navegador implementa su hoja de estilos propia e interna, con determinados valores por defecto, que no siempre siguen la recomendación de la organización W3C.
Hoy en día además de las hojas reset ha tomado popularidad otra hoja de estilos denominada normalize.css, la cual es una hoja de estilos (desarrollada por Nicolas Gallagher) que cumple una función muy similar al reset, donde en lugar de dejar los estilos en cero, se encarga de que los estilos base sean iguales en todos los navegadores, entonces sólo deberemos modificar aquellos elementos que sea necesario desde el punto de vista de nuestro diseño y el resto se mostrará con un estilo estándar.
3) ¿Qué es el CSS box model? 
El modelo de cajas (box model) es la base del diseño web, cada elemento se representa como una caja rectangular, con su contenido, padding (espacio interior), borde y margen construidos uno sobre otro como las capas de una cebolla. El navegador, para interpretar el diseño de una página, procesa los estilos que se aplicarán a cada caja, el tamaño de las capas de la cebolla y la ubicación de unas cajas con respecto a otras. Antes de comprender cómo crear diseños CSS, debemos entender el modelo de cajas.
 Cualquier elemento contenido en un documento tiene la estructura de una caja rectangular dentro del formato del documento, el tamaño y las capas que serán retocadas usando las propiedades CSS. Las propiedades importantes son:
*width y height
Las propiedades width y height establecen el ancho y alto de la caja de contenido, que es el área donde se muestra el contenido de la caja, este contenido comprende tanto el texto incluido en la caja como otras cajas representadas por elementos anidados.
*padding
Padding hace referencia al margen interior de la caja CSS, entre el límite exterior de la caja del contenido y el límite interior del borde. El tamaño de esta capa puede configurarse en sus cuatro lados a la vez con la propiedad abreviada padding, o cada lado por separado con las propiedades: padding-top, padding-right, padding-bottom y padding-left.
*border
El borde de una caja CSS descansa entre el límite exterior del padding y el límite interior del margen. Por defecto tiene un tamaño de 0 (invisible) pero podemos cambiar su grosor, estilo y color para hacerlo visible. La propiedad abreviada de border permite establecer los cuatro lados a la vez, por ejemplo: border: 1px solid black. Pero también se puede dividir en varias propiedades extendidas para su uso en necesidades concretas de estilo:
•	border-top, border-right, border-bottom, border-left: Establecen el grosor, estilo y color de cada lado del borde.
•	border-width, border-style, border-color: Establecen únicamente el grosor, el estilo y el color por separado, pero para los cuatro lados del borde al mismo tiempo.
•	Podemos también establecer cada propiedad por separado para cada lado individualmente, usando border-top-width, border-top-style, border-top-color, etc.
*margin
El margen envuelve la caja CSS, y sostiene a otras cajas del diseño. Se comporta como padding; la propiedad abreviada es margin y las propiedades individuales son margin-top, margin-right, margin-bottom, y margin-left.

4) ¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts? 
Las WebFonts son las fuentes que pueden mostrarse en el navegador sin necesidad de que el usuario las tenga instaladas en su computadora ya que se descargan automáticamente. En CSS para poder utilizarlas se usa la regla-arroba @font-face como se muestra a continuación:
@font-face {
  font-family: "Mystery Quest";
  src: url("mystery-quest.woff2");
}
En la regla @font-face:
•	La propiedad font-family establece cómo tenemos que llamar a la fuente en la hoja de estilo. Si el nombre contiene espacios en blanco, es necesario escribir el nombre entre comillas.
•	La propiedad src indica el camino (absoluto o relativo) del fichero de la fuente.

Una vez definido el nombre de la fuente, se puede hacer referencia a ella en las propiedades font-family.
5) ¿Qué son y para qué sirven los pseudoElementos? 
Los pseudo-elementos se añaden a los selectores, pero a diferencia de las pseudo-clases, estos no describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudoelemento ::first-line selecciona solo la primera línea del elemento especificado por el selector.

Su sintaxis es la siguiente:  selector::pseudo-elemento { propiedad: valor; }

Algunos de los pseudo-elementos que se pueden utilizar son: ::after, ::before, ::first-letter, ::first-line, ::selection, ::backdrop.

6) ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática. 
Cuando tenemos varias reglas CSS en cascada que afectan a un mismo elemento, el orden de prioridad que determina como se mostrará el elemento es el siguiente:
1º !important: un estilo marcado como importante prevalecerá sobre el resto de estilos. En caso de tener varios estilos marcados con !important, prevalecerá el de mayor peso.

2º Origen de las reglas: las reglas del autor de la web prevalecerán sobre las reglas del lector de similar peso. Y tanto las reglas de autor como de lector prevalecerán sobre las del navegador.

3º Peso de la regla: una regla con mayor peso prevalecerá sobre otra de menor peso.
Peso = ABC (número de 3 cifras, cada una de las cuales se calcula contando los selectores de cada tipo según se indica a continuación)

A = nº de selectores de ID (selectores que acceden al atributo “id” del elemento mediante “#”)
B = nº de selectores de CLASE (selectores que acceden al atributo “class” del elemento mediante “.”)
C = nº de selectores de HTML (selectores que acceden al tag html)

Ejemplos ordenados de más a menos peso:
#id1 .clase1 a (A=1, B=1, C=1 –> peso = 111)
div#id1 a (A=1, B=0, C=2 –> peso = 102)
.clase1 li.clase2 a (A=0, B=2, C=2 –> peso = 22)
.clase1 (A=0, B=1, C=0 –> peso = 10)
div a (A=0, B=0, C=2 –> peso = 2)

4º Orden de especificación: cuando dos reglas tienen el mismo peso prevalecerá la última regla especificada.

7) ¿Qué es el view port? ¿Cómo se configura? ¿Qué problema soluciona? 
Viewport es una etiqueta que nos permite indicar cómo se verá un proyecto web en los dispositivos móviles. Se trata de una vista o ventana y nos sirve para definir qué área de pantalla está disponible al renderizar un documento, nivel de escalado y el zoom que debe mostrar inicialmente. Todo ello, con parámetros que le damos a la propia etiqueta META.
Cuando  el navegador renderiza un documento web, hace un escalado de los contenidos para que las páginas que están diseñadas para escritorio se vean de forma aceptable en un dispositivo móvil. En la mayoría de los casos, tendremos que hacer zoom para poder leerlos. Sin embargo, podemos configurar el viewport para indicar qué debe hacer. Para ello, disponemos de los siguientes parámetros en la etiqueta META:
o	Width: anchura virtual (emulada) de la pantalla o anchura del viewport.
o	Height: altura virtual de la pantalla o anchura del viewport.
o	Initial-scale: la escala inicial del documento.
o	Minimum-scale: la escala mínima que se puede poner en el documento.
o	Maximum-scale: la escala máxima configurable en el documento.
o	User-scalable: si se permite o no al usuario hacer zoom.
También podemos indicar el nivel de zoom que tiene inicialmente y hasta dónde podemos llegar.
8) ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos. 
Las media queries son útiles cuando se desea modificar una página web o aplicación en función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).

Se utilizan para:

•	Aplicar estilos condicionales con las reglas-at @media e @import de CSS.
•	Indicar medios específicos en los elementos <link>, <source> y otros elementos HTML.
•	Testear y monitorizar los estados de los medios usando los métodos de javascript Window.matchMedia() y MediaQueryList.addListener().

Las media queries consisten de un tipo de medio opcional y una o más expresiones de características de medios. Varias consultas se pueden combinar utilizando operadores lógicos. No distinguen entre mayúsculas y minúsculas.
El resultado de la consulta es "verdadero" cuando el tipo de medio (si se especifica) coincide con el dispositivo en el que se está mostrando el documento y todas las expresiones en el media query son "verdaderas". En este caso, se aplica los estilos correspondientes, siguiendo las reglas usuales de cascada.
Sintaxis:
<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

Los Media Types (tipos de medios) describen la categoría general de un dispositivo. Excepto cuando se utilizan los operadores lógicos not u only, el tipo de medio es opcional y será interpretada como all.

*all: apto para todos los dispositivos.
*print: destinado a material impreso y visualización de documentos en una pantalla en el modo de vista previa de impresión. 
*screen: destinado principalmente a las pantallas.
*speech: destinado a sintetizadores de voz.

9) ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer aparejadas? ¿Cuándo consideras que sería bueno utilizarlas? 
Las variables CSS son entidades definidas por autores CSS que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, --main-color: black;) y se accede mediante la función var() (por ejemplo, color: var (--main-color);).
Sitios web complejos tienen cantidades muy grandes de CSS, a menudo con una gran cantidad de valores repetidos. Es bueno utilizar las variables si, por ejemplo, el mismo color se utiliza en cientos de lugares diferentes, que requieren búsqueda global y reemplazar si ese color necesita cambiar. Las variables CSS permiten que un valor se almacene en un lugar y luego se haga referencia en varios otros lugares. También un beneficio adicional son los identificadores semánticos. Por ejemplo --main-text-color es más fácil de entender qué #00ff00, especialmente si este mismo color también se utiliza en otro contexto.
El principal problema de las variables es que por su propia naturaleza éstas no son dinámicas, porque una vez que se han establecido no pueden actualizarse en el lado del cliente. Lo que hacemos habitualmente para actualizar el valor de una variable es alterar su valor y volver a ejecutar el proceso de construcción para obtener el nuevo valor, pero una vez desplegado, ese valor no puede ser actualizado por el propio sitio web.
10) CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts? 
CSS Grid layout contiene funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.
Al igual que las tablas, el grid layout permite a un autor alinear elementos en columnas y filas. Sin embargo, con CSS grid son posibles muchos más diseños y de forma más sencilla que con las tablas. Por ejemplo, los elementos secundarios de un contenedor de cuadrícula podrían posicionarse para que se solapen y se superpongan, de forma similar a los elementos posicionados en CSS.
11) ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y las Human Interface Guidelines de Apple? 

1. Profundidad de campo vs material:
Google y Apple tienen escuelas de pensamiento muy diferentes cuando se trata de las interacciones con sus dispositivos y aplicaciones.

Google se ha inspirado en el movimiento de diseño plano y cree que los humanos deberían interactuar con sus componentes como si fueran hojas de papel apiladas una encima de la otra. La profundidad es táctil y hace que el usuario sienta que sostiene cada pantalla en la palma de su mano. 

Apple cree que los dispositivos móviles deben verse como una ventana a otro mundo. Abarcan una profundidad infinita en sus aplicaciones y utilizan componentes como sus botones de alerta y mensajes de texto con fondo borroso para crear la sensación de que los elementos están flotando y existen en su propio espacio. 

2. Postura sobre la animación:
Entre las diferencias más grandes entre las dos escuelas de diseño, Google y Apple tienen puntos de vista muy diferentes sobre el propósito de la animación.

Google ve la animación como una forma de mejorar la experiencia del usuario y dar vida a sus componentes. Esta es, con mucho, una postura mucho más humanista que la que tiene Apple sobre la animación. Google utiliza una animación única para expresar el tipo de "material" con el que estás interactuando. Un ejemplo de esto sería reorganizar las tarjetas. La animación haría que parezca que estás reorganizando tarjetas de papel. O si se desliza hacia abajo para actualizar la página de Google Chrome, rebota como si se hubiera creado con goma. Esta idea es esencial para el diseño de materiales.

Apple tiene un enfoque sin sentido para la animación. Creen que la animación solo debería llevarte de A a B sin distraer al usuario del contenido real. Donde Google tiende a apoyarse en el lado humanista, Apple tiende a apoyarse en el lado inorgánico. No desean hacer referencia al movimiento de la vida cotidiana que disuadiría a los usuarios de las tareas que están tratando de completar. Un ejemplo de esto sería la diapositiva de Apple a la izquierda y la derecha en la navegación de iOS. No rebotan ni se doblan, se deslizan con rigidez y enfoque.

3. Navegación: 
Google tiene reglas sueltas para la navegación y, por lo tanto, brinda a los diseñadores más flexibilidad para la personalización. Sin embargo, esto hace que sea un poco más exigente para los usuarios comprender los patrones de navegación de una aplicación. Google cree que la navegación debería ser obvia y que puede ser en muchos lugares diferentes. Puede usar una variedad de componentes, tales como: botones de acción que revelan opciones, tarjetas que conducen a páginas similares al concepto de un tablero de instrumentos, usando pestañas, e incluso resaltando secciones utilizando códigos de color con iconos en una vista de lista.
Apple utiliza un sistema de navegación muy simple que es fácil de entender para todos los usuarios. Usan una "barra de pestañas" que se adjunta a la parte inferior de la pantalla con las funciones principales de una aplicación. Por lo general, no contiene más de 5 funciones principales, un icono de hamburguesa a veces aparece en la barra de pestañas para elementos de navegación menos importantes, como es el caso de la aplicación de música de Apple. La idea de que una aplicación no debe tener más de 5 funciones principales obliga a los diseñadores a pensar detenidamente sobre las características de la aplicación. Apple también usa "pestañas" como la especificación de diseño de material de Google, pero en su lugar utiliza un componente llamado "control segmentado". Permitiendo solo hasta 3 controles segmentados como máximo, restringiendo las opciones del usuario y los diseñadores.
Además, la vista de Google y Apple difiere enormemente cuando se trata del uso del icono de la hamburguesa. Google a menudo utiliza el menú de hamburguesas para su navegación principal. Una vez que haces clic en la hamburguesa, se abre un "cajón" como lo llaman o, a la inversa, un "navegador lateral" para Apple. Este cajón a menudo contiene una imagen de perfil del usuario, opciones de inicio de sesión, nombre de perfil y una lista basada en iconos de la navegación principal. Sin embargo, Apple no está de acuerdo con este sentimiento, ya que considera que los elementos de navegación principales deben estar presentes en el primer plano y que la hamburguesa debe usarse solo como un lugar para almacenar funciones que no son tareas diarias realizadas por el usuario. Hacen esto para que los usuarios no se distraigan con las opciones y tengan una ruta enfocada (a través de la barra de pestañas inferior) a seguir para que completen las funciones principales.
