function loadEvent() {
    
    let carts = document.querySelectorAll(".addcart")  //Itt jelölöm ki a gombokat, és mentjük el egy változóban

    for( let i of carts){                              //Végig iterálunk a carts-on (.addcart)
            i.addEventListener("click", () => { 
                console.dir(i)                           //Click eseményt adunk hozzá, hogy a kattintáskor mit csináljon
                cartNumbers(i)                          //meghívom a cartnumbers függvényt
            })
        }

    function cartNumbers(pizza){    

            const cloneCard=document.getElementById("clone-card")
            cloneCard.children[0].innerHTML = pizza.parentElement.children[0].innerHTML
            cloneCard.children[1].innerHTML = pizza.parentElement.children[1].innerHTML 

            
            let clone = cloneCard
            let clonedMenu = clone.cloneNode(true); 
            document.getElementById("root").appendChild(clonedMenu);
        
    }

}
window.addEventListener("load", loadEvent)