// script.js

const motos = {
    1: {
        nome: "Honda CG 160",
        descricao: "Moto econômica e resistente.",
        imagemPrincipal: "Imagem/cg 160.png",
        miniaturas: [
            "Imagem/TESTE/teste_mini/cg mini/download.jpg",
            "Imagem/TESTE/teste_mini/cg mini/honda-cg-160-start-conforto.webp",
            "Imagem/TESTE/teste_mini/cg mini/images (1).jpg",
            "Imagem/TESTE/teste_mini/cg mini/images.jpg"
        ],

        detalhes: {
            ano: "2022/2022",
            quilometragem: "0 km",
            estilo: "Street",
            cilindradas: "160",
            combustivel: "FLEX",
            cor: "Vermelha",
            cidade: "Sarandi - PR"
        }    

    },



    2: {
        nome: "Yamaha Fazer 250",
        descricao: "Potência e estilo para sua aventura.",
        imagemPrincipal: "Imagem/TESTE/testemoto.webp",
        miniaturas: [
          "Imagem/TESTE/teste_mini/Suzuki-Hayabusa-GSX-1300R.png",
          "Imagem/TESTE/teste_mini/Kawasaki-Ninja-H2R.jpg",
          "Imagem/TESTE/teste_mini/MTT-Turbine-Superbike-Y2K.jpg",
          "Imagem/TESTE/teste_mini/Confira-as-5-motos-mais-potentes-do-mundo-atualmente-768x509.jpg"
        ],

        detalhes: {
            ano: "2021/2021",
            quilometragem: "5.000 km",
            estilo: "Naked",
            cilindradas: "250",
            combustivel: "Gasolina",
            cor: "Azul",
            cidade: "Maringá - PR"
        }
    },
    


    3: {
        nome: "Kawasaki Ninja 400",
        descricao: "Design esportivo e desempenho impressionante.",
        imagemPrincipal: "Imagem/TESTE/Kawasaki-Ninja-H2R.jpg",
        miniaturas: [
          "Imagem/TESTE/teste_mini/KAWASAKI/download (1).jpg",
           "Imagem/TESTE/teste_mini/KAWASAKI/download1.jpg",
           "Imagem/TESTE/teste_mini/KAWASAKI/download3.jpg", 
           "Imagem/TESTE/teste_mini/KAWASAKI/images4.jpg"

        ],
        detalhes: {
            ano: "2023/2023",
            quilometragem: "0 km",
            estilo: "Esportiva",
            cilindradas: "400",
            combustivel: "Gasolina",
            cor: "Verde",
            cidade: "MARINGÁ-PR"
        }
    }
};

function carregarDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const motoId = params.get("id");

    // Verifica se a moto existe
    const moto = motos[motoId];
    if (moto) {
        // Atualizar a imagem principal
        const imagemPrincipal = document.getElementById("imagem-principal");
        imagemPrincipal.src = moto.imagemPrincipal;

        // Atualizar o título e a descrição
        document.querySelector("h2").textContent = moto.nome;
        document.querySelector(".detalhes p").textContent = moto.descricao;

        // Atualizar os detalhes
        const detalhesLista = document.getElementById("detalhes-lista");
        detalhesLista.innerHTML = `
            <li><strong>Ano:</strong> ${moto.detalhes.ano}</li>
            <li><strong>Quilometragem:</strong> ${moto.detalhes.quilometragem}</li>
            <li><strong>Estilo:</strong> ${moto.detalhes.estilo}</li>
            <li><strong>Cilindradas:</strong> ${moto.detalhes.cilindradas}</li>
            <li><strong>Combustível:</strong> ${moto.detalhes.combustivel}</li>
            <li><strong>Cor:</strong> ${moto.detalhes.cor}</li>
            <li><strong>Cidade:</strong> ${moto.detalhes.cidade}</li>
        `;

        // Atualizar as miniaturas
        const miniaturasContainer = document.querySelector(".miniaturas");
        miniaturasContainer.innerHTML = ""; // Limpar miniaturas anteriores

        if (moto.miniaturas.length > 0) {
            moto.miniaturas.forEach((miniaturaSrc) => {
                const miniatura = document.createElement("img");
                miniatura.src = miniaturaSrc;
                miniatura.classList.add("miniatura");
                miniaturasContainer.appendChild(miniatura);

                // Adicionar evento de clique na miniatura
                miniatura.addEventListener("click", () => {
                    imagemPrincipal.src = miniatura.src;
                });
            });
        } else {
            // Ocultar o container de miniaturas se não houver miniaturas
            miniaturasContainer.style.display = "none";
        }
    } else {
        // Se o ID não for válido, exibe uma mensagem de erro
        document.querySelector(".detalhes").innerHTML = "<p>Moto não encontrada.</p>";
    }
}


// Executar ao carregar a página
window.onload = function () {
    carregarDetalhes();
};
