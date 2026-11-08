function procijeniGuzvu(vrijednost, p1, p2){
    
    if(vrijednost<=p1){
        return "Prihvatljivo";
    }else if(vrijednost<=p2){
        return "Povecana guzva";
    }else{
        return "Potrebna intervencija";
    }
}

    let p1=5;
    let p2=10;

    let unos=prompt("Unesite broj ljudi: ");

    if(unos===null){
        alert("Niste unijeli podatak.");

    }else{
        let broj=Number(unos);

        if(broj<0){
            alert("Unijeli ste negativan broj.");
        }else{
            let rezultat=procijeniGuzvu(unos,p1,p2);
            alert(`Procjena: ${rezultat}`);
        }

    }


