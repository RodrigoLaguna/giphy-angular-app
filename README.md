# GifsApp

## **ViewChild()**
Con el uso del decorador @ViewChild tenemos acceso al valor de una etiqueta o una referencia local del HTML

## **Pipe: titlecase**
Capitaliza el string comenzando siempre la primera letra de la palabra en mayuscula.

## **Operador Not Null Assertion Operator** ( ! )
Operador para asegurarse que el objeto no es nulo,
Este operador es propio de typeScript.

```
ViewChild('txtbuscar') txtbuscar! : ElemenRef
```

## **HttpParams**
Cuando enviamos parámetros por url podemos hacer uso de HttpParams y encapsularlo en un solo objeto.
```
const params = new HttpParams()
                      .set( 'api_key', this.apiKey )
                      .set( 'limit', '10' )
                      .set( 'q', query );
```

----------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
