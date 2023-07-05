
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
  