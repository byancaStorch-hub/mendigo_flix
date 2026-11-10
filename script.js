
// ELEMENTOS DO HTML

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

const movieModal = document.getElementById("movieModal");
const movieForm = document.getElementById("movieForm");

const moviesRow = document.getElementById("moviesRow");

const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieLink = document.getElementById("movieLink");


// ABRIR JANELA DE CRIAR FILME

openModal.addEventListener("click", () => {
    movieModal.style.display = "flex";
});


// FECHAR JANELA NO BOTÃO X

closeModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});


// FECHAR JANELA AO CLICAR FORA DELA

movieModal.addEventListener("click", (event) => {

    if (event.target === movieModal) {
        movieModal.style.display = "none";
    }

});


// FECHAR JANELA COM A TECLA ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        movieModal.style.display = "none";
    }

});


// ADICIONAR NOVO FILME

movieForm.addEventListener("submit", (event) => {

    // Impede a página de recarregar
    event.preventDefault();

    // Pega as informações digitadas
    const name = movieName.value.trim();
    const description = movieDescription.value.trim();
    const link = movieLink.value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!name || !description || !link) {
        alert("Preencha todas as informações do filme!");
        return;
    }

    // Verifica se a URL é válida
    try {
        const url = new URL(link);

        if (url.protocol !== "http:" && url.protocol !== "https:") {
            throw new Error("URL inválida");
        }

    } catch {
        alert("Digite uma URL válida!");
        return;
    }

    // CRIA O CARD DO FILME

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    // Cria a imagem do filme usando a URL informada
    const movieImage = document.createElement("img");

    movieImage.src = link;
    movieImage.alt = name;
    movieImage.title = description;

    // Adiciona a imagem dentro do card
    movieCard.appendChild(movieImage);

    // Adiciona o novo filme na lista
    moviesRow.appendChild(movieCard);

    // Fecha a janela
    movieModal.style.display = "none";

    // Limpa os campos
    movieForm.reset();

    // Confirmação
    alert("Filme adicionado com sucesso! 💜");

});


// CLIQUE NOS FILMES

moviesRow.addEventListener("click", (event) => {

    const card = event.target.closest(".movie-card");

    if (card) {
        const image = card.querySelector("img");

        if (image) {
            alert("Filme: " + image.alt);
        }
    }

});
