//Plastikoversigt///

const plast1 = document.getElementById("plast1"); 
const plast2 = document.getElementById("plast2"); 
const plast3 = document.getElementById("plast3");
const plast4 = document.getElementById("plast4"); 

const rightPil = document.getElementById("rightpil"); 
const leftPil = document.getElementById("leftpil"); 

// Array
const carousel = [plast1, plast2, plast3, plast4]; 

carousel[0].style.display = "block"; //vis slide 1
carousel[1].style.display = "none"; //skjul
carousel[2].style.display = "none"; //skjul
carousel[3].style.display = "none"; //skjul


rightPil.addEventListener("click", nextpic);
leftPil.addEventListener("click", previouspic);


// Funktioner:
function nextpic(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function previouspic(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[3]);
    carousel.pop();
    carousel[0].style.display = "block";
}


//Alert kontaktformular
function myFunction() {
    alert("Kontaktformularen er stadig under udvikling. Alternativt kan du skabe kontakt ved brug af telefonnummer og email som fremgår på siden");
  }





