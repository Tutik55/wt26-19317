
const forma = document.getElementById("forma");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const greska = document.getElementById("greska");

forma.addEventListener("submit", function(event) {
    event.preventDefault();

    const unos = radius.value.trim();
    const r = Number(unos);

    // Provjera ispravnosti unosa
    if (unos === "" || !Number.isFinite(r) || r < 0) {
        greska.textContent = "Unesite ispravan poluprečnik!";
        volume.value = "0.0000";
        return;
    }

    greska.textContent = "";

    // Izracunavanje zapremine kugle
    const zapremina = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Prikaz rezultata na 4 decimale
    volume.value = zapremina.toFixed(4);
});
