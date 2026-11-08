function GenerisiPlanVjezbanja(n,k){
let plan=" ";
for(let i=1;i<=n;i++){
        plan=plan+"Vjezba"+i+"\n";
        if(i%k==0 && i!=n){
            plan=plan+"Pauza!\n";
        }
    }

    return plan;
}

let n=Number(prompt("Unesite vrijednost n: "));
let k=Number(prompt("Unesite vrijednost k: "));

if(n>0 && k>0){
    alert(GenerisiPlanVjezbanja(n,k));
}else{
    alert("Unesi pozitivne cijele brojeve!");
}