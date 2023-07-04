export default class FitnessApp{
   constructor(root) {

    this.root = root;
    this.root.insertAdjacentHTML("afterbegin" , FitnessApp.html());
    this.entries = [];
    this.loadEntries();
    this.updateView();
    this.root.querySelector(".tracker__add").addEventListener("click", () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() +1).toString().padStart(2, "0");
        const day = date.getDay().toString().padStart(2, "0");

        this.addEntry({
            date: `${year}-${month}-${day}`,
            workout: "yoga",
            duration: 30
        });
    })

   }

   static html() {

    return ` <table class="tracker">
    <thead>
        <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th></th>
        </tr>
    </thead>

    <tbody class="tracker__entries">
        <tr class="tracker__row">
            <tr class="tracker__row">
                
            </tr>`
   }

   static Rowhtml() {

    return ` <table class="tracker">
    <thead>
        <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th></th>
        </tr>
    </thead>

    <tbody class="tracker__entries">
        <tr class="tracker__row">
            <tr class="tracker__row">
                
            </tr>`
   }         

   loadEntries() {

    this.entries = JSON.parse(localStorage.getItem("fitness-app-entries") || "[]");
   }

   saveEntries() {
     localStorage.setItem("fitness-app-entries", JSON.stringify(this.entries));

   }

   updateView() {
    const tableBody = this.root.querySelector(".tracker__entries");
    const addRow = data => {
        const template = document.createElement("template");
        let row = null;
        template.innerHTML = FitnessApp.rowHtml().trim();
        row = template.content.firstElementChild;

        row.querySelector(".tracker__date").value = data.date;
        row.querySelector(".tracker__workout").value = data.workout;
        row.querySelector(".tracker__duration").value = data.duration;
        tableBody.appendChild(row);
    };

    tableBody.querySelectorAll(".tracker__row").forEach(row => {
        row.remove();
    });

    this.entries.forEach(data => addRow(data));
   }

   addEntry(data) {
    this.entries.push(data);
    this.saveEntries();
    this.updateView();
   }
}