const app = new Vue({
    el: '#app',
    data: {
        quantities: {
            itemVans: 0,
            itemCarhartt: 0,
            itemDickies: 0,
            itemLacoste: 0,
            itemTnf: 0,
            itemUnderArmour: 0
        },
        prices: {
            itemVans: 10,
            itemCarhartt: 10,
            itemDickies: 10,
            itemLacoste: 15,
            itemTnf: 15,
            itemUnderArmour: 15
        },
        names: {
            itemVans: "Tee shirt Vans",
            itemCarhartt: "Tee shirt Carhartt",
            itemDickies: "Tee shirt Dickies",
            itemLacoste: "Tee shirt Lacoste",
            itemTnf: "Tee shirt The North Face",
            itemUnderArmour: "Tee shirt Under Armour"
        },
    },
    computed: {
        totalPrice(){
            return (this.quantities.itemVans * this.prices.itemVans)
            + (this.quantities.itemCarhartt * this.prices.itemCarhartt)
            + (this.quantities.itemDickies * this.prices.itemDickies)
            + (this.quantities.itemLacoste * this.prices.itemLacoste)
            + (this.quantities.itemTnf * this.prices.itemTnf)
            + (this.quantities.itemUnderArmour * this.prices.itemUnderArmour)
        }
    },
    methods: {
        addItemToCart(item) {
            this.quantities[item] += 1
            this.resumeSelection(item)
        },
        resumeSelection(item) {
            let baliseSelection = document.querySelector(".selection")

            let nouveauSpan = document.createElement("span")
            nouveauSpan.textContent = this.names[item]
            baliseSelection.appendChild(nouveauSpan)    
            
            let nouveauBr = document.createElement("br")
            baliseSelection.appendChild(nouveauBr)
        },
        deleteSelection(){
            //Efface les articles mis dans le panier
            let baliseDelete = document.querySelector(".selection")
            baliseDelete.innerHTML = ``

            //Remet à 0 le prix total du panier
            for(let item in this.quantities){
                this.quantities[item] = 0
            }
        },
        pay() {
            window.open("paiement.html", "_blank")
        }
    }
})