const produtos = [
   {
    nome: "Creatina Soldiers Nutrition 1kg",
    descricao: "100% Creatina Monohidratada. Ideal para força, desempenho e ganho de massa muscular.",
    precoAntigo: "R$ 159,90",
    preco: "R$ 129,90",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9",
    imagem: "imagens/creatina.jpg",
    link: "https://meli.la/2SKaA4s"
},
{
    nome: "Parafusadeira Furadeira 48V",
    descricao: "Kit completo com maleta, duas baterias e acessórios.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8",
    precoAntigo: "R$ 329,90",
    preco: "R$ 249,90",
    imagem: "imagens/parafusadeira.jpg",
    link: "https://meli.la/1SbWttJ"
},
{
    nome: "Sérum Facial Principia",
    descricao: "Niacinamida para reduzir oleosidade e manchas da pele.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9",
    precoAntigo: "R$ 79,90",
    preco: "R$ 59,90",
    imagem: "imagens/serum.jpg",
    link: "https://meli.la/32hwtyc"
},
{
    nome: "L'Oréal Elseve Óleo Extraordinário",
    descricao: "Nutrição intensa para cabelos secos e danificados.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9",
    precoAntigo: "R$ 59,90",
    preco: "R$ 39,90",
    imagem: "imagens/loreal.jpg",
    link: "https://meli.la/2jkA4MK"
},
];

const area = document.getElementById("produtos");

produtos.forEach(produto => {
    area.innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p class="avaliacao">${produto.avaliacao || ""}</p>

            <p class="descricao">
                ${produto.descricao || ""}
            </p>

            <p class="preco-antigo">
                ${produto.precoAntigo || ""}
            </p>

            <h2>${produto.preco}</h2>

            <a href="${produto.link}" target="_blank">
                Ver no Mercado Livre
            </a>
        </div>
    `;
});