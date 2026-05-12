from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / 'app-con-errores'

index = (APP / 'index.html').read_text(encoding='utf-8')
css = (APP / 'css' / 'estilos.css').read_text(encoding='utf-8')
js = (APP / 'js' / 'app.js').read_text(encoding='utf-8')

checks = []

def check(name, ok, hint):
    checks.append((name, ok, hint))

check('Ruta CSS corregida', 'href="css/estilos.css"' in index, 'En index.html, el CSS debe apuntar a css/estilos.css')
check('Ruta JS corregida', 'src="js/app.js"' in index, 'En index.html, el script debe apuntar a js/app.js')
check('H1 cerrado correctamente', '<h1>AgroSmart: Registro de producción rural</h1>' in index or '<h1>AgroSmart: Registro de produccion rural</h1>' in index, 'Revisa la etiqueta h1 del encabezado')
check('Boton tipo submit o button corregido', 'type="buttom"' not in index, 'buttom esta mal escrito; debe ser button o submit')
check('Formulario con id correcto en JS', 'getElementById("form-registro")' in js or "getElementById('form-registro')" in js, 'El id del formulario debe coincidir con el HTML')
check('Input leche con id correcto', 'getElementById("litros-leche")' in js or "getElementById('litros-leche')" in js, 'El id litros-leche debe coincidir con el HTML')
check('Input maiz con id correcto', 'getElementById("kilos-maiz")' in js or "getElementById('kilos-maiz')" in js, 'El id kilos-maiz debe coincidir con el HTML')
check('Input lluvia con id correcto', 'getElementById("lluvia-mm")' in js or "getElementById('lluvia-mm')" in js, 'El id lluvia-mm debe coincidir con el HTML')
check('Resultado con id correcto', 'getElementById("resultado-resumen")' in js or "getElementById('resultado-resumen')" in js, 'El elemento de salida se llama resultado-resumen')
check('Tabla con id correcto', 'getElementById("cuerpo-registros")' in js or "getElementById('cuerpo-registros')" in js, 'El tbody se llama cuerpo-registros')
check('Conversion a numero', 'Number(' in js or 'parseFloat(' in js, 'Convierte los valores de input antes de sumarlos')
check('Promedios usan registros.length', '/ registros.length' in js or 'cantidad' in js or '/ cantidad' in js, 'El promedio debe dividirse por la cantidad real de registros')
check('Logica de alerta revisada', 'promedioLeche > 25' not in js, 'La alerta de baja produccion no debe activarse con promedio alto')
check('CSS background corregido', 'backgroud' not in css, 'Busca backgroud en estilos.css')
check('CSS width corregido', 'widht' not in css, 'Busca widht en estilos.css')
check('CSS grid-template-columns corregido', 'grid-template-colums' not in css, 'Busca grid-template-colums en estilos.css')
check('Selector principal corregido', '.tarjeta-principal' not in css or '.principal' in css, 'El HTML usa class="tarjeta principal"')

print('\nValidador basico del proyecto V2\n')
score = 0
for name, ok, hint in checks:
    if ok:
        score += 1
    print(f"[{'OK' if ok else 'PENDIENTE'}] {name}")
    if not ok:
        print(f"  Sugerencia: {hint}")

print(f"\nResultado orientador: {score}/{len(checks)}")
print('Este validador es una ayuda. No reemplaza la bitacora, las capturas ni la revision docente.\n')
