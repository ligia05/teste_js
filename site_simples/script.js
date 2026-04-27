function verificarNota() {
  //captura os valores dos campos
  const nome = document.getElementById("nome").value;
  const bimestre = document.getElementById("bimestre").value;
  const materia = document.getElementById("materia").value;
  const nota = document.getElementById("nota").value;

  //crie um objeto com os dados
  const dados = {
    nome: nome,
    bimestre: bimestre,
    materia: materia,
    nota: nota,
  };
  // salvando no local storage (como string JSON)
  localStorage.setItem("dadosNota", JSON.stringify(dados));

  //mensagem de confirmação
  document.getElementById("resultado").textContent =
    "dados enviados com sucesso";
}
