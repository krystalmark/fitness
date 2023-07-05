// Fetch fitness data from an API
function fetchFitnessData() {
    fetch('http://localhost:3000/fitnesses')
      .then(response => response.json())
      .then(data => displayFitnessData(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Display fitness data on the webpage
  function displayFitnessData(data) {
    // Assuming the data is an array of fitness records with properties like 'date', 'steps', 'calories', etc.
    const fitnessContainer = document.getElementById('fitness-container');
  
    // Clear previous data
    fitnessContainer.innerHTML = '';
  
    // Iterate through each fitness record and create HTML elements to display the data
    data.forEach(record => {
      const recordElement = document.createElement('div');
      recordElement.innerHTML = `<p>Name: ${record.name}</p>
                                 <p>Target: ${record.target}</p>
                                 <p>BodyPart: ${record.bodyPart}</p>
                                 <img src="${record.gifUrl}" alt="${record.title} GifUrl" />`;
      fitnessContainer.appendChild(recordElement);
    });
  }
  
  // Trigger data fetching and display on page load or any other event
  fetchFitnessData();
  