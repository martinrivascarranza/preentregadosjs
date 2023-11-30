
// Primer alerta para dar la bienvenida al usuario
alert("¡Bienvenido a nuestra tienda de kettlebells!");

// Solicitar nombre y apellido
let fullName = prompt("Por favor, ingresa tu nombre completo");

// Saludo personalizado
alert(`Bienvenido ${fullName} a nuestro sitio web`);

const pesasRusas = [
  { peso: 4, precio: 10 },
  { peso: 6, precio: 14 },
  { peso: 8, precio: 20 },
  { peso: 12, precio: 25 },
  { peso: 16, precio: 35 },
  { peso: 20, precio: 40 },
  { peso: 24, precio: 50 }
];

let infoPesasRusas = "Información sobre kettlebells:\n";

for (const pesa of pesasRusas) {
  infoPesasRusas += `Peso: ${pesa.peso} kg - Precio: ${pesa.precio} euros\n`;
}

alert(infoPesasRusas);

// Funciones
function mostrarPesasRusas() {
  let mensaje = "Kettlebells Disponibles:\n";

  for (let i = 0; i < pesasRusas.length; i++) {
    mensaje += `${pesasRusas[i].peso} kg - ${pesasRusas[i].precio} euros\n`;
  }

  alert(mensaje);
}

function encontrarPesaPorPeso(peso) {
  const pesaEncontrada = pesasRusas.find(pesa => pesa.peso === peso);

  if (pesaEncontrada) {
    return pesaEncontrada;
  } else {
    return null;
  }
}

function filtrarPesasPorPrecio(min, max) {
  const pesasFiltradas = pesasRusas.filter(pesa => pesa.precio >= min && pesa.precio <= max);
  return pesasFiltradas;
}

// Entrada de datos del cliente
const pesoCliente = parseFloat(prompt("Ingresa el peso deseado en kg:"));

// Búsqueda de pesa rusa
const pesaElegida = encontrarPesaPorPeso(pesoCliente);

// Mostrar resultados
if (pesaElegida) {
  const precioConIVA = pesaElegida.precio * 1.19; // 19% de IVA
  alert(`Has elegido una kettlebell de ${pesaElegida.peso} kg. El costo es de ${precioConIVA.toFixed(2)} euros (IVA incluido).`);
} else {
  alert("Lo siento, no tenemos kettlebells disponibles para el peso ingresado.");
}

// Otra compra
let otraCompra = prompt("¿Quieres comprar algo más? (si/no)").toLowerCase();

if (otraCompra === "si") {
  mostrarPesasRusas(); // Mostrar pesas rusas disponibles

  // Entrada de datos del cliente para la nueva compra
  const pesoClienteNuevo = parseFloat(prompt("Ingresa el peso deseado en kg para tu nueva kettlebell:"));

  // Búsqueda de pesa rusa para la nueva compra
  const pesaElegidaNueva = encontrarPesaPorPeso(pesoClienteNuevo);

  // Mostrar resultados para la nueva compra
  if (pesaElegidaNueva) {
    const precioConIVANuevo = pesaElegidaNueva.precio * 1.19; // 19% de IVA
    alert(`Has elegido una nueva kettlebell de ${pesaElegidaNueva.peso} kg. El costo es de ${precioConIVANuevo.toFixed(2)} euros (IVA incluido).`);
    alert("Gracias por comprar con nosotros. ¡Que tengas un gran día!");
  } else {
    alert("Lo siento, no tenemos kettlebell nuevas disponibles para el peso ingresado.");
  }

} else {
  alert("Gracias por comprar con nosotros. ¡Que tengas un gran día! ¡Adiós!");
}
 