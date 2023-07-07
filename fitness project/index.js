
function fetchFitnessData() {
    fetch('http://localhost:3000/fitnesses')
      .then(response => response.json())
      .then(data => displayFitnessData(data))
      .catch(error => console.error('Error:', error));
  }
  

  function displayFitnessData(data) {

    const fitnessContainer = document.getElementById('fitness-container');
  
    
    fitnessContainer.innerHTML = '';
  
    
    data.forEach(record => {
      const recordElement = document.createElement('div');
      recordElement.innerHTML = `<p>Name: ${record.name}</p>
                                 <p>Target: ${record.target}</p>
                                 <p>BodyPart: ${record.bodyPart}</p>
                                 <img src="${record.gifUrl}" alt="${record.title} GifUrl" />`;
      fitnessContainer.appendChild(recordElement);
    });

  }

  fetchFitnessData();


  
   
 
  document.addEventListener('DOMContentLoaded', function() {
    const addEntryBtn = document.getElementById('addEntry');
    const entryTable = document.getElementById('entryTable').getElementsByTagName('tbody')[0];
    let entryCount = 1;
  
    addEntryBtn.addEventListener('click', function() {
      const currentDate = new Date().toLocaleDateString();
      const workout = prompt('Enter workout:');
      const duration = prompt('Enter duration:');
  
      if (workout && duration) {
        const newEntry = document.createElement('tr');
        const dateCell = document.createElement('td');
        const workoutCell = document.createElement('td');
        const durationCell = document.createElement('td');
        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
  
        dateCell.textContent = currentDate;
        workoutCell.textContent = workout;
        durationCell.textContent = duration;
        removeButton.textContent = 'Remove Entry';
        removeButton.className = 'removeBtn';
  
        removeButton.addEventListener('click', function() {
          entryTable.removeChild(newEntry);
        });
  
        newEntry.appendChild(dateCell);
        newEntry.appendChild(workoutCell);
        newEntry.appendChild(durationCell);
        newEntry.appendChild(removeButtonCell);
        removeButtonCell.appendChild(removeButton);
        entryTable.appendChild(newEntry);
  
        entryCount++;
      }
    });
  
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('removeBtn')) {
        const entryRow = event.target.closest('tr');
        if (entryRow) {
          entryRow.parentNode.removeChild(entryRow);
        }
      }
    });
  });