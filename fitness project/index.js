
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
      const newEntry = document.createElement('tr');
      const entryText = document.createElement('td');
      entryText.textContent = 'Entry ' + (++entryCount);
      const removeButtonCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Times';
      removeButton.className = 'removeBtn';
      removeButton.addEventListener('click', function() {
        entryTable.removeChild(newEntry);
      });
      removeButtonCell.appendChild(removeButton);
      newEntry.appendChild(entryText);
      newEntry.appendChild(removeButtonCell);
      entryTable.appendChild(newEntry);
    });
  
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('removeBtn')) {
        const entryRow = event.target.closest('tr');
        if (entryRow) {
          entryTable.removeChild(entryRow);
        }
      }
    });
  });
  
   
  




  