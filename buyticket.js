

let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);


let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);


let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);


let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);



let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);




function ticketsPrice(evento) {
    
    evento.preventDefault();
    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
        let spanNode = document.createElement("span");
        spanNode.className = 'ticketsBuy';
        let textNode = document.createTextNode("Comprar");
        spanNode.append(textNode);
        outputNode.append(spanNode);

        
        let ticketsBuy = document.querySelector(".ticketsBuy");
        ticketsBuy.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".ticketsQuantity").style.border = "2px solid red";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad";
    }

}


function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:"

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className);
    }
}



function updateCategory(evento) {
    
    let categoria = evento.target.parentNode.className;

    switch (categoria) {
        case "estudiante": {
            console.log("es estudiante");
            document.querySelector(".ticketsCategory").options.selectedIndex = 0;
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
        case "trainee": {
            console.log("es trainee");
            document.querySelector(".ticketsCategory").options.selectedIndex = 1;
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
        case "junior": {
            console.log("es junior");
            document.querySelector(".ticketsCategory").options.selectedIndex = 2;
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
    }
}

function ticketsSubmit() {

    let form = document.querySelector(".ticketsForm");

    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.querySelector("." + form[i].className).style.border = "1px solid red";
            } else {
                document.querySelector("." + form[i].className);
            }
        }

        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.querySelector("." + form[2].className);
            } else {
                alert("Debe ingresar un correo válido");
                document.querySelector("." + form[2].className).style.border = "1px solid red"
            }
        } else {
            alert("Completar los campos en rojo");
        }

    }
}


function clearInput(evento) {
    
    document.querySelector("." + evento.target.className);
}


function descuento(evento) {
    
    switch (evento.target.value) {
        case "Estudiante": {
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
        case "Trainee": {
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
        case "Junior": {
            document.querySelector(".estudiante");
            document.querySelector(".trainee");
            document.querySelector(".junior");
            break;
        }
    }
}
