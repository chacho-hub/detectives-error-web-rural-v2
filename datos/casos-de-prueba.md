# Casos de prueba - Finca La Esperanza

Usa estos datos para verificar si el sistema corregido funciona correctamente.

## Datos base

| Día | Leche litros | Maíz kg | Lluvia mm | Observación |
|---|---:|---:|---:|---|
| Lunes | 36 | 90 | 4 | Producción normal y clima estable |
| Martes | 34 | 85 | 0 | Sin lluvia y buena cosecha |
| Miércoles | 28 | 75 | 18 | Lluvia moderada |
| Jueves | 31 | 82 | 10 | Día estable |
| Viernes | 22 | 60 | 45 | Baja producción y lluvia fuerte |
| Sábado | 38 | 95 | 3 | Mejor producción de la semana |
| Domingo | 25 | 70 | 20 | Producción límite |

## Resultados esperados

| Indicador | Resultado esperado |
|---|---:|
| Total de leche | 214 litros |
| Promedio diario de leche | 30.57 litros |
| Total de maíz | 557 kg |
| Promedio diario de maíz | 79.57 kg |
| Total de lluvia | 100 mm |
| Días registrados | 7 |

## Alertas esperadas

El sistema debe marcar como crítico el viernes porque:

- La leche fue menor que 25 litros.
- La lluvia fue mayor que 40 mm.

## Pruebas adicionales

### Prueba 1: campo vacío

Deja vacío el campo de fecha y presiona registrar.

Resultado esperado: el sistema debe mostrar una advertencia y no guardar el registro.

### Prueba 2: número negativo

Ingresa `-5` en litros de leche.

Resultado esperado: el sistema debe impedir el registro o mostrar una alerta.

### Prueba 3: un solo registro

Ingresa solo el lunes.

Resultado esperado:

- Total leche: 36 L.
- Promedio leche: 36 L.
- Total maíz: 90 kg.
- Promedio maíz: 90 kg.

### Prueba 4: registros persistentes

Si realizas el reto de `localStorage`, recarga la página.

Resultado esperado: los datos deben seguir visibles después de recargar.
