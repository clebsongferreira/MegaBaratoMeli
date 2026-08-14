const URL_PLANILHA =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQw7k1h-0t4ml9dedoOO4DY_w40pedA7o_SPcPeejOO2zbB5d-wQrvup7B55_BG2QRp2eSRi0tzBviq/pub?gid=0&single=true&output=csv";

const area = document.getElementById("produtos");

Papa.parse(URL_PLANILHA, {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(resultado){

        area.innerHTML = "";

        resultado.data.forEach(produto => {

            if (
                produto.Ativo &&
                produto.Ativo.toUpperCase() !== "SIM"
            ) return;

            area.innerHTML += `
                <div class="produto">

                    <img src="${produto.Imagem}" alt="${produto.Nome}">

                    <h3>${produto.Nome}</h3>

                    <p class="avaliacao">
                        ${produto.Avaliacao || ""}
                    </p>

                    <p class="descricao">
                        ${produto.Descrição || ""}
                    </p>

                    <p class="preco-antigo">
                        ${produto["Preço Antigo"] || ""}
                    </p>

                    <h2>
                        const preco = Number(
    String(produto.Preço)
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()
);

const precoFormatado = preco.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
                    </h2>

                    <a href="${produto.Link}" target="_blank">
                        Ver no Mercado Livre
                    </a>

                </div>
            `;
        });

    }

});
