// 0 - Inizializzare le variabili
var calcButton = document.getElementById("btn-calculate");
var burgerName = document.getElementById("burger-input");
var ingredients = document.getElementsByClassName("ingredients");
var coupon = document.getElementById("coupon-input");
var codes = ["classe27", "boolean"];
var subtotal = document.getElementById("subtotal");

// 1 - Evento click al bottone btn-calculate 
calcButton.addEventListener("click",
    function() {

        // 2 - Condizione inserimento nome panino
        if ( burgerName.value != "" ) {

            // 3 - Iterazione per verificare se l'ingrediente è stato selezionato e sommare il suo costo al prezzo base (50)
            var sum = 50;
            for ( i = 0; i < ingredients.length; i++ ) {
                if ( ingredients[i].checked == true )  {
                    sum += parseInt(ingredients[i].value);
                }
            }
            
            // 4 - Se inserito, applicare coupon e ricalcolare somma
            if ( codes.includes(coupon.value) == true ) {
                sum -= sum * 0.2;
            }

            // 5 - Stampo a schermo il prezzo del panino
            subtotal.innerHTML = "$" + sum;

        } else {
            alert ("Name your Burger!")
        }

    }
);