var cart = {};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cart = resultObj.data;
            carrito = cart["articles"]

            let cartNameHTML = document.getElementById("articleName")
            let cartCostHTML = document.getElementById("articleCost")
            let cartSubtotalHTML = document.getElementById("subtotal")
            let cartImageHTML = document.getElementById("cartImage")
            let cartCantHTML = document.getElementById("inputCant")
            let totalHTML = document.getElementById("total")

            cartNameHTML.innerHTML = cart["articles"][0].name;
            cartCostHTML.innerHTML = cart["articles"][0].currency + " $" + cart["articles"][0].unitCost;
            cartSubtotalHTML.innerHTML = cart["articles"][0].unitCost
            cartImageHTML.innerHTML =  "<img src=' " + cart["articles"][0].src + "'>" 

            let precio = cart["articles"][0].unitCost
            let premium = document.getElementById("premium")
            let express = document.getElementById("express")
            let standar = document.getElementById("standar")

            //Precio subtotal en base a la cantidad
            cartCantHTML.onchange= (e) => {
              let inputValue = e.target.value
              let subTotal = inputValue * precio
              cartSubtotalHTML.innerHTML = cart["articles"][0].currency + " $" + subTotal
                    premium.onchange = (e) =>{
                        totalHTML.innerHTML = cart["articles"][0].currency + " $" + [subTotal + subTotal * 0.15]
                    } 
                    express.onchange = (e) =>{
                        totalHTML.innerHTML = cart["articles"][0].currency + " $" + [subTotal + subTotal * 0.07]
                    }
                    standar.onchange = (e) =>{
                        totalHTML.innerHTML = cart["articles"][0].currency + " $" + [subTotal + subTotal * 0.05]
                    }

            }   
           
            

                        
    
        }
    });
});



