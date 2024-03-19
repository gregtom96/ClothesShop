//resume_panier()

/*A FAIRE AVEC VUE.JS*/

function resume_panier(){

    let boutonAddToCart = document.querySelector(".vans")
    console.log(boutonAddToCart)

    boutonAddToCart.addEventListener("click", ()=>{
        let baliseMenu = document.querySelector(".menu")
        let nouveauParagraphe = document.createElement("p")
        nouveauParagraphe.textContent = "Tee shirt Vans"
        baliseMenu.appendChild(nouveauParagraphe)
    })
}

