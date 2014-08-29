# AngularJS Tutorial de Aplicación Catálogo de Teléfonos (Phonecat)

## Información general

Esta aplicación lleva al desarrollador a través del proceso de construir una aplicación-web utilizando
angular. La aplicación está inspirada en **Google Phone Gallery**, la cual ya no 
existes. Aquí está una referencia histórica: [Google Phone Gallery on WayBack](http://web.archive.org/web/20131215082038/http://www.android.com/devices/).

Cada commit etiquetado es una lección separada que enseña un solo aspecto de angular.

El tutorial completo lo puedes encontrar en http://docs.angularjs.org/tutorial.

## Prerrequisitos

### Git

- Un buen lugar para aprender cono A good place to learn about instalar y configurar git es [aquí][git-github]
- Git [inicio][git-home] (descarga, documentación)

### Node.js y Herramientas

- Obten [Node.js][node-download].
- Instala la herramienta de dependencias (`npm install`)


## Funcionamiento de la aplicación

- La estructura de archivos de la aplicación está basada en el proyecto [angular-seed].
- No hay un backend dinámico (no hay un servidor de applicación) para esta ap. En lugar de ello fingimos  
  un servidor de applicación al obtener archivos json estáticos.
- Lee la sección de Desarrollo al final para familiarizarte con el funcionamient y desarrollo de
  una aplicación de angular.

## Commits / Tutorial Outline

Puedes hacer check out cualquier punto del tutorila usando
    git checkout paso-?

Para ver los cambios entre dos lecciones cualquiera usa el comando git diff.
    git diff paso-?..paso-?

### paso-0

- Agrega directiva ngApp para arrancar la ap
- Agrega una plantilla simple con una expresión


### paso-1

- Agrega una lista html estática con dos teléfonos en index.html. Convertiremos esta página estática en
  una dinámica con alluda de angular.


### paso-2

- Convierte la lista html estática en una dinámica al:
  - crear controlador `ListaTelefonosCtrl` para la aplicación
  - extraer los datos del HTML y moverlos dentro del controlador como en un set de datos en-memoria.
  - convertir el documento HTML estático en una plantilla de Angular con el uso de la directiva `ngRepeat`
    la cual itera el set de datos de teléfonos.
    `ngRepeat` clona su contenido por cada instancia in el set de datos y  and y los representa en la vista.
- Agrega una prueba unitaria simple para exhibir como escribir tests y correrlos con Karma


### paso-3


- Agrega una caja de búsqueda para demostrar como:
  - el enlace de datos (data-binding) funciona en cajas de texto.
  - usar el filtro `filter`.
  - `ngRepeat` automáticamente encoge y crece el número de teléfonos en la vista.
- Y una prueba de end-to-end para:
  - mostrar como se escriben las pruebas de end-to-end y como correrlas con Protractor.
  - provear que la caja de búsqueda y el repetidor están conectados entre si correctamente.


### paso-4

- Agrega la propiedad `age` a cada teléfono en el modelo de datos.
- Agrega una combo `<select>` para cambiar el orden de la lista de teléfonos.
- Sobreescribe el valor del orden por defecto en el controlador.
- Agrega pruebas unitarias y e2e tests para esta funcionalidad.

### paso-5

- Reemplaza los datos en memoria por datos cargados desde el servidor (en 
  forma de archivo estático `phones.json`).
  - El archivo `phones.json` se carga utilizando el servicio `$http`.
- Demuestra el uso de [servicios][service] e [inyección de dependencias][DI].
  - El servicio [$http] se inyecta en el controlador a través la [inyección de dependencias][DI].


### paso-6

- Agrega imágenes de teléfono y links a nuevas páginas que muestran el detalle del teléfono.
- Agrega pruebas de end2end que verifican que los links a las páginas del detalle.
- Agrega CSS solo un poco de estilo a la página.


### paso-7

- Introduce el servicio [$route] el cual permite enlazar URLs para un deep-linking con las
  vistas:
  - Crea `PhoneCatCtrl` el cual govierna la aplicación entera y contiene la configuración de $route.
  - Instala `angular-route` usando bower y carga el módulo `ngRoute`.
    (Asegúrate de correr npm install otra vez.)
  - Copia los parámetros de ruta a la propiedad `params` en el scope raiz para accesarlo en sub controladores.
  - Reemplaza el contenido de `index.html` por la directiva `ngView`, la cual desplegará la plantilla parcial
    template de la ruta actual.

- Crea la ruta de lista de teléfonos:
  - Mapea la ruta`/telefonos` a `ListaTelefonosCtrl` y `partails/lista-telefonos.html`.
  - Preserva el controlador existente `ListaTelefonosCtrl`.
  - Mueve html existente de `index.html` a `partials/lista-telefonos.html`.
- Crea la ruta del detalle de teléfono:
  - Mapea la ruta `/telefonos/<id-telefono>` a `DetalleTelefonoCtrl` y `partails/detalle-telefono.html`.
  - Crea un controlador vacio `DetallesTelefonoCtrl`.


### paso-8

- Implementa el controlador `DetalleTelefonoCtrl` para traer los detalles de un teléfono específico de un archivo JSON 
  utilizando el servicio `$http`.
- Actualiza la plantilla de la vista del detalle de un teléfono.
- Agrega CSS para hacer que la vista de los detalles de un teléfono se vea "bonita".


### paso-9

- Agrega un filtro personalizado `checkmark`.
- Actualiza la plantilla del detalle del teléfono para utilizar el filtro `checkmark`.
- Agrega prueba unitaria para el filtro.

### paso-10

En la vista del detalle de teléfono, al darle click a una imagen miniatura, cambia la imagen principal por una imagen 
más grande la imagen mineatura.

- Define el modelo variable `urlImagenPrincipal` en `DetalleTelefonoCtrl` y setea su valor por defecto.
- Crea el método de controlador `setImagen()` para cambiar `urlImagenPrincipal`.
- Registra una exprecion con la directiva `ngClick` en las imágenes mineatura para setear la imagen principal, usando
  `setImagen()`.
- Agrega pruebas de e2e para es funcionalidad.
- Agrega CSS para cambiar el cursor del mouse cuando el usuari apunta a una imagen miniatura.


### paso-11

- Reemplaza [$http] por [$resource].
- Crea un servicio personalizado `Telefono` que representa el cliente `$resource`.


### paso-12

- Agrega animaciones a la aplicación:
  - Anima cambios a la lista de teléfonos, agregando, removiendo y reordenando teléfonos.
  - Anima cambios a la imagen principal en la vista del detalle de teléfono.


## Desarrollo con angular-phonecat

La siguiente doc describe como puedes probar y desarrollar esta aplicación.


### Instalar dependencias

La aplicación depende de varias herramientas de node.js, tales como Bower, Karma y Protractor. Puedes 
instalarlas corriendo:

```
npm install
```

Esto también correrá bower, el cual descargará los archivos de angular necesarios para el paso actual del
tutorial.

La mayoría de los scripts descritos a continuación will correrán esto automáticamente pero no hace ningún daño correrlos
Cuando gustes.

### Correr la aplicación durante desarrollo

- Corre `npm start`
- navega tu browser a `http://localhost:8000/app/index.html` para ver la ap corriendo en tu navegador.

### Correr pruebas unitarias

Te recomendamos usar [Jasmine][jasmine] y [Karma][karma] para tus pruebas/specs unitarias, pero eres libre
de usar lo que funcione para ti.

- Inicia Karma con `npm test`
  - Un navegador se iniciará y conectará al servidor de Karma. Chrome is navegador por defecto, otros pueden 
  ser capturados cargando la misma url de Chrome o cambiando el archivo `test/karma.conf.js`.
- Karma se sentará y observará tu aplicación y los archivos JavaScript de pruebas. Para correr o reiniciar las pruebas 
  solo cambia cualquiera de tus archivos.


### Pruebas de end to end

Te recomendamos usar [Jasmine][jasmine] y [Protractor][protractor] para pruebas de end-to-end.

Require un servidor web que sirva la aplicación. Vee Correr la aplicación durante desarrollo, arriba.

- Servidor de aplicación: corre `npm start`.
- En una consola a parte corre las pruebas de end2end: `npm run protractor`. Protractor ejecutará los scripts de  
  pruebas de end2end conta la aplicación web misma.
  - La configuración está diseñada ára correr las pruebas directamente en Chrome. Si quieres correrlas contra 
    otro navegador entonces tienes que instalar el webDriver, `npm run update-webdriver`, y modificar 
   la configuración en `test/protractor-conf.js`.

## Layout del Directoryo de la Aplicación

    app/                  --> todos los archivos que serán usados en producción
      css/                --> archivos css
        app.css           --> hoja de estilo por defecto
      img/                --> archivos de imágenes
      index.html          --> archivo layout de la ap (la plantilla html principal de la ap)
      js/                 --> archivos javascript
        ap.js             --> módulo principal de la aplicación
        controladores.js  --> controlladores de la aplicación
        directivas.js     --> directivas de la aplicación
        filtros.js        --> filtros de la aplicación
        servicios.js      --> services personalizados de la aplicación
        animations.js     --> ganchos para correr animaciones de JQuery con ngAnimate
      partials/           --> vistas parciales de angular (plantillas html parciales) utilizadas por ngRoute
        partial1.html
        partial2.html
      bower_components  --> librerías js, incluyendo angular y jquery

    scripts/            --> scripts prácticos
      update-repo.sh       --> descarga la última versión de este repo
                               (TEN CUIDADO ESTO ELIMINARA TODOS LOS CAMBIOS QUE HAYAS HECHO)
    test/               --> archivos fuentes de las pruebas y librerías
      karma.conf.js        --> archivo de configuración para correr las pruebas unitarias con Karma
      protractor-conf.js   --> archivo de configuración para correr las pruebas de e2e con Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> specs/pruebas por nivel de unidad 
        controladoresSpec.js --> specs para controladores
        directivasSpec.js  --> specs para directivas
        filtrosSpec.js     --> specs para filtros
        serviciosSpec.js    --> specs para servicios

## Contacto

Para más información acerca de AngularJS por favor visite http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/guide/di
[directive]: http://docs.angularjs.org/guide/directive
[filterFilter]: http://docs.angularjs.org/api/ng/filter/filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ngRepeat]: http://docs.angularjs.org/api/ng/directive/ngRepeat
[ngView]: http://docs.angularjs.org/api/ngRoute/directive/ngView
[node-download]: http://nodejs.org/download/
[$resource]: http://docs.angularjs.org/api/ngResource/service/$resource
[$route]: http://docs.angularjs.org/api/ngRoute/service/$route
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
