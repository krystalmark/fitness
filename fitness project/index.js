import FitnessApp  from "./fitness.js";

const app = document.getElementById("app");
const wt = new FitnessApp(app);

window.wt = wt;



fetch("http://localhost:3000/images").then((data => {
    return data.json();

}).then ((completedata) => {

    let data1="";
    completedata.map((values) => {

       data1=`<img src=${values.image}`   
    });

    document.getElementById("images").innerHTML = data1;

}))