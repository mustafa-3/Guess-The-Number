let sayac = 5;
let sayi = Math.floor(Math.random() * 101);

const inputs = document.querySelector(".inputs");
const input = document.getElementById("input");
const btn = document.querySelector("#btn");
const lower = document.getElementById("lower");
const higher = document.getElementById("higher");
const reset = document.querySelector(".reset")




btn.addEventListener("click",() => {
    
    if(!input.value) {
        alert("Please enter a number");
        return}
    if(parseInt(input.value) < 100 &&  parseInt(input.value) > 0){
        const guessdiv = document.createElement("div");
    guessdiv.classList.add("bottom");
    inputs.appendChild(guessdiv);


   
    if(sayi < Number(input.value)) {
        sayac--;
        guessdiv.innerText = `Your number is high. Your remaining right ${sayac}`;
        higher.innerText = Number(input.value);
        input.value = "";
        if(sayac<1){
            guessdiv.innerText = "Your right is over."
            btn.remove();
            input.remove();
            reset.style.visibility = "visible"
        }
    }
   
    else if (sayi > Number(input.value)) {
        sayac--;
        guessdiv.innerText = `Your number is low. Your remaining right ${sayac} `;
        lower.innerText = Number(input.value);
        input.value = "";
        if(sayac<1){
            guessdiv.innerText = "Your right is over"
            btn.remove();
            input.remove();
        }
        
    }
    else {
        guessdiv.innerText = "Congrat. You got it right ";
        reset.style.visibility = "visible"
    }
   
    }else {
        alert("You have entered incorrectly.");
        input.focus()
    }
    
}
)

window.onload = () => {
    input.focus()
}

reset.addEventListener("click", () => {
    document.location.reload(true);
})
