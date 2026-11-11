
const stavke = document.querySelectorAll("#lista li");
const sazetak = document.getElementById("sazetak");
const reset = document.getElementById("reset");

// Funkcija za azuriranje broja zavrsenih stavki
function azurirajSazetak() {
    const zavrsene = document.querySelectorAll("#lista li.zavrseno");

    sazetak.textContent = "Završeno: " + zavrsene.length + " / " + stavke.length;
}

// Prolazak kroz sve stavke
stavke.forEach(function(stavka) { // prolazimo kroz svih 5 stavki
    const dugme = stavka.querySelector("button"); // pronalazimo dugme svake stavke 
    const tekst = stavka.querySelector("span"); // pronalazimo tekst stavke 
    const pocetniTekst = tekst.textContent; // cuvamo pocetni tekst

    // Klik na dugme
    dugme.addEventListener("click", function() { // registrujemo klik na dugme 

        if (stavka.classList.contains("zavrseno")) {
            stavka.classList.remove("zavrseno");
            tekst.textContent = pocetniTekst;
            dugme.textContent = "Završi";
        } else {
            stavka.classList.add("zavrseno");
            tekst.textContent = pocetniTekst + " (Završeno)";
            dugme.textContent = "Poništi";
        }

        azurirajSazetak();
    });
});

// Resetovanje svih stavki
reset.addEventListener("click", function() {

    stavke.forEach(function(stavka) {
        const tekst = stavka.querySelector("span");

        stavka.classList.remove("zavrseno");
        tekst.textContent = tekst.textContent.replace(" (Završeno)", "");
        stavka.querySelector("button").textContent = "Završi";
    });

    azurirajSazetak();
});

azurirajSazetak();
