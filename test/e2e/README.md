#Pruebas End 2 End (Protractor)
Para correr los tests de end-2-end contra la aplicación usa [Protractor](https://github.com/angular/protractor).

## Inicia el Servidor Web
En cualquiera de los casos necesitarás que la aplicación esté corriendo via el servidor-web.
En el folder raiz del repositorio corre:

```
npm start
```

La aplicación ahora debe estar disponible en `http://localhost:8000/app/index.html`

## Pruebas con Protractor

Como una configuracín de una sola vez, descarga webdriver.
```
npm run update-webdriver
```

Inicia el corredor de pruebas Protractor usando la configuración e2e:

```
npm run protractor
```
