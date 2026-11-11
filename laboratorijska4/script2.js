
const forma = document.getElementById("forma");
const naslov = document.getElementById("naslov");
const tekst = document.getElementById("tekst");
const kategorija = document.getElementById("kategorija");

const greska = document.getElementById("greska");
const pregled = document.getElementById("pregled");

const pregledNaslov = document.getElementById("pregledNaslov");
const pregledTekst = document.getElementById("pregledTekst");
const pregledKategorija = document.getElementById("pregledKategorija");

// Prikaz obavijesti
forma.addEventListener("submit", function(event) {
    event.preventDefault();

    const uneseniNaslov = naslov.value.trim();
    const uneseniTekst = tekst.value.trim();

    // Provjera da li su polja prazna
    if (uneseniNaslov === "" || uneseniTekst === "") {
        greska.textContent = "Morate unijeti naslov i tekst obavijesti!";
        return;
    }

    // Brisanje prethodne poruke greske
    greska.textContent = "";

    // Azuriranje pregleda
    pregledNaslov.textContent = uneseniNaslov;
    pregledTekst.textContent = uneseniTekst;
    pregledKategorija.textContent = "Kategorija: " + kategorija.options[kategorija.selectedIndex].text;

    // Promjena stila prema kategoriji
    pregled.classList.remove("informacija", "upozorenje");
    pregled.classList.add(kategorija.value);
});

// Resetovanje forme
forma.addEventListener("reset", function() {
    greska.textContent = "";
});
