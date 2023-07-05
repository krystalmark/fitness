import FitnessApp  from "./fitness.js";

const app = document.getElementById("app");
const wt = new FitnessApp(app);

window.wt = wt;



document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/fitness")
     .then(response => response.json())
     .then(data => {

        const fitnessList = document.getElementById("fitness");
        fitnessList.innerHTML = "";

        data.forEach(fitness => {

            constFitnessItem = document.createElement("li");
            fitnessItem.classList.add("fitness-item");
            fitnessItem.innerHTML = `
            <p>Name: ${fitness.name}<p>
            <p>Difficulty: ${fitness.difficulty}<P>
            <p>Equipment: ${fitness.equipment}<p>
            <p>instructions: ${fitness.instructions}<P>
            `;
            fitnessList.appendChild(fitnessItem);
        });
      });
     });