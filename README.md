# AngularJS Phone Catalog Tutorial Application

## Overview

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

- Add static html list with two phones into index.html. We will convert this static page into
  dynamic one with the help of angular.


### paso-2

- Convert the static html list into dynamic one by:
  - creating `PhoneListCtrl` controller for the application
  - extracting the data from HTML, moving it into the controller as an in-memory dataset.
  - converting the static HTML document into an Angular template with the use of the `ngRepeat`
    directive which iterates over the dataset of phones.
    `ngRepeat` clones its contents for each instance in the dataset and renders it into the view.
- Add a simple unit test to show off how to write tests and run them with Karma


### paso-3


- Add a search box to demonstrate how:
  - the data-binding works on input fields.
  - to use the `filter` filter.
  - `ngRepeat` automatically shrinks and grows the number of phones in the view.
- Add an end-to-end test to:
  - show how end-to-end tests are written and how to run them with Protractor.
  - prove that the search box and the repeater are correctly wired together.


### paso-4

- Add `age` property to each phone in the data model.
- Add a `<select>` input to change the phone list order.
- Override the default order value in the controller.
- Add unit and e2e tests for this feature.

### paso-5

- Replace the in-memory dataset with data loaded from the server (in
  the form of static `phones.json` file).
  - The `phones.json` file is loaded using the `$http` service.
- Demonstrate the use of [services][service] and [dependency injection][DI].
  - The [$http] service is injected into the controller through [dependency injection][DI].


### paso-6

- Add phone images and links to new pages that show the phone details.
- Add end2end tests that verify the links to the detail pages.
- Add CSS to style the page just a notch.


### paso-7

- Introduce the [$route] service which allows binding URLs for deep-linking with
  views:
  - Create `PhoneCatCtrl` which governs the entire app and contains $route configuration.
  - Install `angular-route` using bower and load the `ngRoute` module.
    (Be sure to run npm install again.)
  - Copy route parameters to root scope `params` property for access in sub controllers.
  - Replace the contents of `index.html` with the `ngView` directive, which will display the partial
    template of the current route.

- Create phone list route:
  - Map `/phones` route to `PhoneListCtrl` and `partails/phones-list.html`.
  - Preserve existing `PhoneListCtrl` controller.
  - Move existing html from `index.html` to `partials/phone-list.html`.
- Create phone details route:
  - Map `/phones/<phone-id>` route to `PhoneDetailCtrl` and `partails/phones-detail.html`.
  - Create empty placeholder `PhoneDetailsCtrl` controller.


### paso-8


- Implement `PhoneDetailCtrl` controller to fetch the details for a specific phone from a JSON file
  using `$http` service.
- Update the template for the phone detailed view.
- Add CSS to make the phone details page look "pretty".


### paso-9

- Add custom `checkmark` filter.
- Update phone detail template to use `checkmark` filter.
- Add unit test for the filter.

### paso-10

In the phone detail view, clicking on a thumbnail image, changes the main phone image to be the
large version of the thumbnail image.

- Define `mainImageUrl` model variable in the `PhoneDetailCtrl` and set its default value.
- Create `setImage()` controller method to change `mainImageUrl`.
- Register an expression with the `ngClick` directive on thumb images to set the main image, using
  `setImage()`.
- Add e2e tests for this feature.
- Add CSS to change the mouse cursor when user points at thumnail images.


### paso-11

- Replace [$http] with [$resource].
- Created a custom `Phone` service that represents the `$resource` client.


### paso-12

- Add animations to the application:
  - Animate changes to the phone list, adding, removing and reordering phones.
  - Animate changes to the main phone image in the detail view.


## Development with angular-phonecat

The following docs describe how you can test and develop further this application.


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current paso of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        ap.js          --> the main application module
        controladores.js  --> application controlladores de la aplicación
        directivas.js   --> application directives
        filtros.js      --> custom angular filters
        servicios.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        partial1.html
        partial2.html
      bower_components  --> 3rd party js libraries, including angular and jquery

    scripts/            --> handy scripts
      update-repo.sh       --> pull down the latest version of this repos
                               (BE CAREFUL THIS DELETES ALL CHANGES YOU HAVE MADE)
      private/             --> private scripts used by the Angular Team to maintain this repo
    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> unit level specs/tests
        controladorsSpec.js --> specs for controllers
        directivasSpec.js  --> specs for directives
        filtrosSpec.js     --> specs for filters
        serviciosSpec.js    --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

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
