
const forma = document.getElementById("forma");
const naziv = document.getElementById("naziv");
const iznos = document.getElementById("iznos");
const greska = document.getElementById("greska");

const tijeloTabele = document.getElementById("tijeloTabele");
const ukupno = document.getElementById("ukupno");
const brojStavki = document.getElementById("brojStavki");

// Funkcija za azuriranje zbira i broja stavki
function azurirajPodatke() {
    const redovi = tijeloTabele.getElementsByTagName("tr");
    let zbir = 0;

    for (let i = 0; i < redovi.length; i++) {
        const celije = redovi[i].getElementsByTagName("td");
        zbir += Number(celije[1].textContent);
    }

    ukupno.textContent = zbir.toFixed(2);
    brojStavki.textContent = "Broj stavki: " + redovi.length;
}

// Dodavanje novog troska
forma.addEventListener("submit", function(event) {
    event.preventDefault();

    const uneseniNaziv = naziv.value.trim();
    const uneseniIznos = iznos.value.trim();
    const broj = Number(uneseniIznos);

    // Provjera ispravnosti unosa
    if (uneseniNaziv === "" ||
        uneseniIznos === "" ||
        !Number.isFinite(broj) ||
        broj < 0) {

        greska.textContent = "Unesite ispravan naziv i nenegativan broj!";
        return;
    }

    greska.textContent = "";

    // Kreiranje novog reda
    const noviRed = tijeloTabele.insertRow();

    // Kreiranje celija
    const celijaNaziv = noviRed.insertCell(0);
    const celijaIznos = noviRed.insertCell(1);

    // Upis podataka u celije
    celijaNaziv.textContent = uneseniNaziv;
    celijaIznos.textContent = broj.toFixed(2);

    // Azuriranje podataka
    azurirajPodatke();

    // Praznjenje polja nakon uspjesnog unosa
    naziv.value = "";
    iznos.value = "";
});

// Pocetno azuriranje
azurirajPodatke();
