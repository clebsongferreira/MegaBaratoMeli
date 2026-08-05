const produtos = [
   {
    nome: "Creatina Soldiers Nutrition 1kg",
    descricao: "100% Creatina Monohidratada. Ideal para força, desempenho e ganho de massa muscular.",
    precoAntigo: "R$ 239,00 (619660)",
    preco: "R$ 59,90",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9",
    imagem: "creatina.jpg",
    link: "https://meli.la/2SKaA4s"
},
{
    nome: "Parafusadeira Furadeira 48V",
    descricao: "Kit completo com maleta, duas baterias e acessórios.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8 (25.208)",
    precoAntigo: "R$ 299,00",
    preco: "R$ 131,56",
    imagem: "parafusadeira.jpg",
    link: "https://meli.la/1SbWttJ"
},
{
    nome: "Sérum Facial Principia",
    descricao: "Niacinamida para reduzir oleosidade e manchas da pele.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9 (16.117)",
    precoAntigo: "R$ 79,90",
    preco: "R$ 39,90",
    imagem: "serum.jpg",
    link: "https://meli.la/32hwtyc"
},
{
    nome: "L'Oréal Elseve Óleo Extraordinário",
    descricao: "Nutrição intensa para cabelos secos e danificados.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9 (3.554)",
    precoAntigo: "R$ 65,09",
    preco: "R$ 34,98",
    imagem: "loreal.jpg",
    link: "https://meli.la/2jkA4MK"
},
{
    nome: "Protetor Solar Facial Antioleosidade FPS60 Loreal",
    descricao: "L'Oréal Paris Solar Expertise Protetor Solar Anti oleosidade Sem Cor FPS60 40g, um protetor solar facial de uso diário desenvolvido para todos os tipos de pele.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8 (14.637)",
    precoAntigo: "R$ 60,29",
    preco: "R$ 32,39",
    imagem: "protetor-solar-loreal.jpg",
    link: "https://meli.la/2ECsMDR"
},
{
    nome: "Air Fryer Oven Philco 11L 8 Funções Visor 1800W PAF11B",
    descricao: "Fritadeira Air Fryer Philco PAF11B 127V transforma a maneira como você cozinha.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.9(2.218)",
    precoAntigo: "R$ 530,45",
    preco: "R$ 359,00",
    imagem: "air-fryer.jpg",
    link: "https://meli.la/1hTgD21"
},
{
    nome: "Smart Tv Philips 32 Hd 32phg6910/78 com Wi-fi",
    descricao: "Descubra a Smart TV Philips 32 pol HD 32PHG6910/78, a escolha ideal para quem busca qualidade de imagem e conectividade em um único aparelho.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8(1.840)",
    precoAntigo: "R$ 1499,00",
    preco: "R$ 891,67",
    imagem: "tv-philips.jpg",
    link: "https://meli.la/2BAK7u8"
},
{
    nome: "Boné Ny New York Yankees Unissex Blogueira Fitão Regulável",
    descricao: "Boné NY Bordado Regulável, alta Qualidade, Conforto e Estilo,produto com acabamento premium, regulagem precisa e design atemporal.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8 (14.637)",
    precoAntigo: "R$ 49,99",
    preco: "R$ 28,22",
    imagem: "bone-new-york.jpg",
    link: "https://meli.la/2z8Qec8"
},
{
    nome: "Maquina Acabamento Cortar Cabelo Barba E Pelos Kemei 032",
    descricao: "Máquina de Acabamento Cortar Cabelo Barba e Pelos Kemei 032 é a escolha ideal para quem busca um corte preciso e confortável.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.7(12.116)",
    precoAntigo: "R$ 78,00",
    preco: "R$ 31,97",
    imagem: "maquina-acabamento.jpg",
    link: "https://meli.la/2g7Y5Ka"
},
{
    nome: "Kit 10 Potes Herméticos Vidro 640ml Starhouse Marmita Forno Micro-ondas Airfryer com 4 travas de super vedação",
    descricao: "Fabricado em vidro super resistente, pode ser lavado ao forno, microondas (sem a tampa) e freezer.",
    avaliacao: "⭐⭐⭐⭐⭐ 4.8(61186)",
    precoAntigo: "R$ 189,00",
    preco: "R$ 95,00",
    imagem: "kit-10-potes.jpg",
    link: "https://meli.la/1hwupzV"
}
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
