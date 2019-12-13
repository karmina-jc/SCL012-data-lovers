# PokéPoket

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición de usuario](#2-definición-de-usuario)
* [3. Definición UX](#3-definición-ux)
* [4. Desarrollo de Interfaz UI](#4-desarrollo-de-interfaz-ui)
* [5. Problema de usabilidad](#5-problema-de-usabilidad)
* [6. Conclusiones](#6-conclusiones)

***

## 1. Preámbulo

Pokémon GO es una experiencia de juego internacional y ha sido nombrada "el mejor juego para móviles". El objetivo de nuestra web es ofrecer información detallada sobre los Pokemones y con un facil acceso.

## 2. Definición de usuario

La estadística realizada por statista.com muestra que en Latino America existe 44 millones de usuarios de Pokemon Go. (foto grafico statista)
![Statista.com](src/media/pokemon-users-wordwide.jpg "Statista")

Según las estadísticas de comScore Pokémon Go realizadas al principio del año 2017, el 60% de la audiencia tenía entre 18 y 34 años (los que se encontrarian entre el rango de los llamados Millennials y una parte de la Gen Z que abarca entre 1981-1996).

![comscore.com](src/media/Pokemon-Go-users.jpg "comscore")

 Apptopia informó a mediados de 2017 que el 57.4% de los jugadores de Pokémon Go eran hombres, también encontró un porcentaje más bajo de usuarios Millennials, siendo un 38%. Otro 32% tenía menos de 18 años, lo que le dio al juego una división fascinante en términos de los grupos de edad de los usuarios de Pokémon Go. Una pequeña encuesta de los Estados Unidos realizada por Inc. y publicada en agosto de 2016 encontró una división de género similar; 59% hombres y 41% mujeres. Este estudio estableció la edad promedio de los jugadores de Pokémon Go en 29 años, y encontró un ingreso familiar promedio de US$52,430
 ![Apptopia](src/media/pokemon-go-demographics.png "Apptopia")

### Historia de usuario:

* Usuario N° 1:
  * El usuario lleva poco tiempo jugando y quiere empezar a combatir.
  * Entra a nuestra página para buscar información sobre fortaleza y debilidades de los Pokemones que tiene y así saber cuál se sirve para el combate.
* Definición de hecho:
  * Al ingresar se encuentra el listado de Pokemon ordenados por número creciente. El usuario puede elegir entre orderar alfabeticamente de A a Z, de Z a A o por número decreciente. También en la parte izquierda puede filtrar por tipo y debilidad. Una vez que se muestra el listado, hacer click al Pokemon deseado se abre una ventana con los detalles.
## 3. Definición UX

La web es una enciclopedia de los Pokemones, contiene listado de los Pokemones y sus características. Los usuarios pueden encontrarlos a través del buscador, usando los filtros o ordenar alfabéticamente. La web ayuda a los usuarios del juego Pokemon Go a conocer las características y los poderes de cada Pokemon.
### Requerimientos de la web: 
* La información debe ser detallada y fácil de accesar
* Permitir al usuario buscar por filtros, ordenar por distintas reglas: alfabéticamente, por números, etc.
* Debe visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.
* Diseño adecuado al rubro y a los usuarios 

### Sketch, prototipo de baja fidelidad
![Baja fidelidad](src/media/baja-fidelidad1.jpg "Baja fidelidad")
![Baja fidelidad 2](src/media/baja-fidelidad2.jpg "Baja fidelidad 2")
![Baja fidelidad 3](src/media/baja-fidelidad3.jpg "Baja fidelidad 3")


### Planificación
La planificación de las  tareas  se han definido usando [Trello](https://trello.com/b/P7UBUevO/deta-lover).


### Decisiones de diseño

En cuanto el diseño, como partida, se tomó en cuenta la página oficial de Pokemon Go que usa una barra de menú obscura, iconos para las secciones y colores vivas. El contenido es en orientación boxed con backgroud blanco y fuera del box el background negro. Considerando esto hemos elegido usar un color obscuro para el menú, naranjo como color primaria y blanco para el background.
![PokemonGo](src/media/pokemon-website.jpg "PokemonGo")

### Prototipo de alta fidelidad
El prototipo de alta fidelidad para el testeo se realizó en Figma, en un principio se hicieron pruebas de color, composición y diseño. Hasta que finalmente de llegó al prototipo definitivo.
* Primera versión 
![Primera version desktop](src/media/primer-version-de-desktop-home.jpg "Primera version desktop")
![Primera version desktop 2](src/media/primer-version-de-desktop-home2.jpg "Primera version desktop 2")
![Primera version desktop 3](src/media/primer-version-de-desktop-home3.jpg "Primera version desktop 3")
![Primer version de movil](src/media/primer-version-de-movil.jpg "Primer version de movil")
* Prueba de usabilidad de la primera versión
[Loom prueba 1](https://www.loom.com/share/23309f87042341368c38833f4aa01a6f)
* Pruebas de usabilidad después de la primera iteración
[Loom prueba 1](https://www.loom.com/share/819180616ea74e839cd8662c1f240b17)
[Loom prueba 2](https://www.loom.com/share/4af0f30692d64767bdc308514c554fe6)
[Loom prueba 3](https://www.loom.com/share/8711d564d7904538aa2009b49c88e0ea)
* Prototipo final
[Figma](https://www.figma.com/file/Z6eCUuv54KqSj4ihp30RaK/PokePocket).

## 4. Desarrollo de la interfaz UI
### Paleta de colores
Color primario: 
  * Naranjo es asociado a la juventud, aventura, alegría, sociabilidad, lo que hace que sea adecuada para nuestra web relacionada al juego Pokemon. 
  * Negro es usado para obtener contraste con el naranjo.
  * Blanco para el background, resalta el contenido y ofrece un diseño clean y moderno. 
![Paleta de colores](src/media/paleta-de-colores.jpg "Paleta de colores")
### Tipografías
Se utilizaron dos tipografías, <strong>Play</strong> para títulos y <strong>Rajdhani</strong> para parágrafos.
<strong>Play</strong> es una tipografia moderna y minimalista de tipo sans serif. Todas las letras en Play derivan de la 'O' - cuadrada y circular al mismo tiempo.
<strong>Rajdhani</strong> es un tipo de letra geométrico sans-serif. El diseño presenta formas de letras condensadas con lados planos, similar al estilo de gaspipe (tubería de gas) que era popular en el diseño de carteles de principios del siglo XX pero con una inclinación más "futurista".

## 5. Conclusiones
La web está enfocada a resolver los problemas de los usuarios de Pokemon que desean hacer combates y no saben cuál Pokemon es más adecuado. La necesidad del usuario es encontrar facilmente los detalles de cada Pokemon y por ese razón, al ingresar en la página se encuentra el listado de Pokemones con un solo click. 

El diseño se ha realizado teniedo en cuenta el diseño de la página oficial Pokemon Go y el feedback recibido por los test de usabilidad. De estaa manera logramos que la web se viese muy similar a lo estimado en nuestro prototipo de alta fidelidad.
