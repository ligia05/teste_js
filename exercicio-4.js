let dinheiro = 5000;
let temPassaporte = true;
let temVisto = true;
let destino = "Disney";
let viagemNacional = true;

console.log("vou para " + destino + " e tenho " + dinheiro);
if (!viagemNacional) {
}
if (temPassaporte && temVisto) {
  console.log("Atende os requisitos");
} else {
  console.log("Não atende os requisitos");
}
if (dinheiro > 3000) {
  console.log("é suficiente");
} else {
  console.log("não é sufuciente");
}

if (temPassaporte && temVisto && dinheiro > 300) {
  console.log("pode viajar a vontade");
} else {
  console.log("não será possivel viajar");
}
if (temPassaporte || temVisto) {
  console.log("sem problemas para viagem");
} else {
  console.log("viagem negada");
}
