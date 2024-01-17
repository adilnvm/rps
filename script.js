let random = Math.random();
console.log(random);

let myform = document.getElementById("myform")

function computer() 
    {
        let comp_choice;
        if (random <= 0.33333)
            {
                document.getElementById("res").textContent = "Computer chose Rock!";
                comp_choice = "rock"
            }
        else if (random >= 0.6666666)
            {
                document.getElementById("res").textContent = "Computer chose paper!";
                comp_choice = "paper";
            }
        else {
            document.getElementById("res").textContent = "Computer chose scissor!";
            comp_choice = "scissor";
        } 
        return comp_choice;       
    }


    function input() {
    let inp = document.getElementById("u_choice").value;
    let comp_choice = computer();

    if  (inp == comp_choice) {
        document.getElementById("final").textContent = "Its a Tie"
               
    }
    else if (inp == "rock" && comp_choice == "paper") {
        document.getElementById("final").textContent = "Computer Won"

    }
    else if (inp == "rock" && comp_choice == "scissor") {
        document.getElementById("final").textContent = "You Won"

    }
    else if (inp == "paper" && comp_choice == "rock") {
        document.getElementById("final").textContent = "You Won"

    }
    else if (inp == "paper" && comp_choice == "scissor") {
        document.getElementById("final").textContent = "Conputer Won"

    }
    else if (inp == "scissor" && comp_choice == "rock") {
        document.getElementById("final").textContent = "Computer Won"

    }
    else if (inp == "scissor" && comp_choice == "paper") {
        document.getElementById("final").textContent = "You Won"

    }   
}  
function play(){
    input();
}