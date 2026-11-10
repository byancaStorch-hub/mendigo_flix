
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

const movieModal = document.getElementById("movieModal");
const movieForm = document.getElementById("movieForm");

const moviesRow = document.getElementById("moviesRow");

const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieLink = document.getElementById("movieLink");


openModal.addEventListener("click", () => {
    movieModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});


movieModal.addEventListener("click", (event) => {

    if (event.target === movieModal) {
        movieModal.style.display = "none";
    }

});



document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        movieModal.style.display = "none";
    }

});


movieForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = movieName.value.trim();
    const description = movieDescription.value.trim();
    const link = movieLink.value.trim();

    if (!name || !description || !link) {
        alert("Preencha todas as informações do filme!");
        return;
    }

    try {
        const url = new URL(link);

        if (url.protocol !== "http:" && url.protocol !== "https:") {
            throw new Error("URL inválida");
        }

    } catch {
        alert("Digite uma URL válida");
        return;
    }

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImage = document.createElement("img");

    movieImage.src = link;
    movieImage.alt = name;
    movieImage.title = description;

    movieCard.appendChild(movieImage);

    moviesRow.appendChild(movieCard);

    movieModal.style.display = "none";

    movieForm.reset();

    alert("Filme adicionado com sucesso!");

});


moviesRow.addEventListener("click", (event) => {

    const card = event.target.closest(".movie-card");

    if (card) {
        const image = card.querySelector("img");

        if (image) {
            alert("Filme: " + image.alt);
        }
    }

});
