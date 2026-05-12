# Pistas graduales para estudiantes

Usa estas pistas solo cuando ya hayas intentado diagnosticar el error por tu cuenta.

## Nivel 1: la pagina no se ve bien

- Revisa si el archivo CSS se esta cargando.
- Abre DevTools y entra a Network o Red.
- Si ves `estilos.css` en rojo, la ruta esta mal.
- Compara `href="estilos.css"` con la carpeta real `css/estilos.css`.

## Nivel 2: el boton no registra datos

- Revisa si el archivo JavaScript se esta cargando.
- Si `app.js` aparece en rojo, revisa la ruta del script.
- Si el script ya carga, abre la consola.
- Si aparece un error con `addEventListener`, probablemente JavaScript esta buscando un elemento que no existe.

## Nivel 3: los id no coinciden

Compara los id del HTML con los que usa JavaScript:

- HTML: `form-registro`; JS no debe buscar `formRegistro`.
- HTML: `litros-leche`; JS no debe buscar `leche-litros`.
- HTML: `kilos-maiz`; JS no debe buscar `maiz-kilos`.
- HTML: `lluvia-mm`; JS no debe buscar `lluvia`.
- HTML: `resultado-resumen`; JS debe usar ese mismo id.
- HTML: `cuerpo-registros`; JS debe usar ese mismo id.

## Nivel 4: los calculos no son coherentes

- Los input entregan texto.
- Para calcular, convierte con `Number(...)`.
- No dividas siempre entre 6. Divide por la cantidad real de registros.
- Prueba con 1 registro, 2 registros y 7 registros.

## Nivel 5: la alerta sale cuando no debe

- Si el promedio de leche es alto, no deberia decir produccion baja.
- Revisa si la condicion usa `>` cuando deberia usar `<`.
- Define un umbral claro, por ejemplo 25 litros.

## Nivel 6: ir mas alla

Cuando todo funcione:

- Agrega boton de limpiar registros.
- Usa localStorage.
- Agrega grafico con barras.
- Agrega validacion de negativos.
- Agrega recomendaciones automaticas.
