
const dugmad = document.querySelectorAll(".dugme");

dugmad.forEach(function(dugme) {

    dugme.addEventListener("click", function() {

        const cilj = dugme.getAttribute("data-cilj");
        const predmeti = document.getElementById(cilj);
        const znak = dugme.querySelector(".znak");

        if (predmeti.style.display === "block") {
            predmeti.style.display = "none";
            znak.textContent = "+";
            dugme.setAttribute("aria-expanded", "false");
        } else {
            predmeti.style.display = "block";
            znak.textContent = "-";
            dugme.setAttribute("aria-expanded", "true");
        }

    });

});
