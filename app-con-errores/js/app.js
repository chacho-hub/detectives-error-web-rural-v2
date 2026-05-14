// Actividad: Detectives del error en una página web rural
// Este archivo contiene errores intencionales para practicar depuración inicial.

const registros = [];

const form = document.getElementById("registro-form");


const fechaInput = document.getElementById("fecha");
const lecheInput = document.getElementById("leche-litros");
const maizInput = document.getElementById("kilos-maiz");
const lluviaInput = document.getElementById("lluvia");
const observacionInput = document.getElementById("observacion");

const totalLecheSalida = document.getElementById("total-leche");
const promedioLecheSalida = document.getElementById("promedio-leche");
const totalMaizSalida = document.getElementById("total-maiz");
const promedioMaizSalida = document.getElementById("promedio-maiz");

const resultado = document.getElementById("resultado-resumen");

const tabla = document.getElementById("cuerpo-registros");
const grafico = document.getElementById("grafico-leche");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const fecha = fechaInput.value;

  
  const leche = Number(lecheInput.value);
  const maiz = Number(maizInput.value);
  const lluvia = Number(lluviaInput.value);
  const observacion = observacionInput.value;

  if (fecha === "") {
    alert("Debes ingresar el día o la fecha.");
    return;
  }

  registros.push({ fecha, leche, maiz, lluvia, observacion });

  actualizarResumen();
  actualizarTabla();
  actualizarGrafico();

  form.reset();
});

function actualizarResumen() {
  // ERROR INTENCIONAL 15: si leche y maíz son texto, estos cálculos fallan o concatenan.
  const totalLeche = registros.reduce((acumulado, item) => acumulado + item.leche, 0);
  const totalMaiz = registros.reduce((acumulado, item) => acumulado + item.maiz, 0);

  // ERROR INTENCIONAL 16: divide siempre entre 6, pero los registros pueden ser 1, 2, 7, etc.
  const cantidad = registros.length;
  const promedioLeche = cantidad > 0 ? totalLeche / cantidad : 0;
  const promedioMaiz = cantidad > 0 ? totalMaiz / cantidad : 0;



  totalLecheSalida.textContent = totalLeche.toFixed(2) + " L";
  promedioLecheSalida.textContent = promedioLeche.toFixed(2) + " L";
  totalMaizSalida.textContent = totalMaiz.toFixed(2) + " kg";
  promedioMaizSalida.textContent = promedioMaiz.toFixed(2) + " kg";

 
  if (promedioLeche > 25) {
    resultado.textContent = "Alerta: la producción de leche está baja.";
    resultado.className = "resultado critico";
  } else {
    resultado.textContent = "Producción normal. Continúa registrando datos.";
    resultado.className = "resultado";
  }
}

function actualizarTabla() {
  tabla.innerHTML = "";

  registros.forEach((item) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.fecha}</td>
      <td>${item.leche} L</td>
      <td>${item.maiz} kg</td>
      <td>${item.lluvia} mm</td>
      <td>${item.observacion}</td>
    `;
    tabla.appendChild(fila);
  });
}

function actualizarGrafico() {
  grafico.innerHTML = "";

  registros.forEach((item) => {
    const barra = document.createElement("div");
    barra.className = "barra";

   
    const ancho = item.leche * 2;

    barra.innerHTML = `
      <strong>${item.fecha}: ${item.leche} L</strong>
      <span style="width: ${ancho}px"></span>
    `;

    grafico.appendChild(barra);
  });
}
