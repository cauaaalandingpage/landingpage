document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Pega apenas o nome
  let nome = encodeURIComponent(document.getElementById("nome").value);

  // Mensagem só com o nome + frase fixa
  let url = `https://wa.me/5531984127957?text=Olá, meu nome é ${nome} e quero receber meu ebook!`;

  // Abre o WhatsApp
  window.open(url, "_blank");
});
