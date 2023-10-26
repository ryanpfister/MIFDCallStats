// Define the mapContainer variable
const mapContainer = document.getElementById('map');

document.addEventListener('DOMContentLoaded', () => {
  function initMap() {
    // Initialize the map inside this function
    const map = new google.maps.Map(mapContainer, {
      zoom: 13,
      center: { lat: 40.87858840401015, lng: -72.96741740343136 } // Adjust the initial center of the map
    });

    function displayCalls(calls) {
      callsList.innerHTML = '';
    
      // Sort the calls in descending order based on the call ID
      const sortedCalls = calls.sort((a, b) => b.incnum - a.incnum);
    
      sortedCalls.forEach(call => {
        const callItem = document.createElement('li');
        callItem.innerHTML = `
          <div>
            <p><strong>Call ID:</strong> ${call.incnum}</p>
            <p><strong>Call Time:</strong> ${call.datetimealarm}</p>
            <p><strong>Call Type:</strong> ${call.dispcalltypedescr} - ${call.dispsubtypedescr}</p>
            <p><strong>Location Name:</strong> ${call.sitename}</p>
            <p><strong>Location:</strong> ${call.address} - ${call.city} - ${call.state} - ${call.zip}</p>
            <p><strong>Cross:</strong> CROSS 1: ${call.cross1} | CROSS 2: ${call.cross2}</p>
          </div>
          <hr>
        `;
    
        callsList.appendChild(callItem);
      });
    }
    const latitudeOffset = 0.35293852569;
    const longitudeOffset = -0.3830711276;
    
    function displayMap(incidents) {
      incidents.forEach(incident => {
        const latitude = parseFloat(incident.latitude) + latitudeOffset;
        const longitude = parseFloat(incident.longitude) + longitudeOffset;
        
        // Check if latitude and longitude values are valid numbers
        if (isNaN(latitude) || isNaN(longitude)) {
          console.error('Invalid latitude or longitude value:', incident);
          return; // Skip this incident and continue to the next one
        }
    
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: incident.incnum
        });
      });
    }
    
    function fetchRecentCalls() {
      fetch('/api/calls')
        .then(response => response.json())
        .then(data => {
          console.log('Received calls response:', data);
          displayCalls(data);
          displayMap(data);
        })
        .catch(error => {
          console.error('Error fetching recent calls:', error);
        });
    }
    
    function fetchCallStats() {
      fetch('/api/stats')
        .then(response => response.json())
        .then(data => {
          console.log('Received stats response:', data);
          // Display the statistics data
          statsContainer.innerHTML = `
            <p><strong>Total Calls:</strong> ${data.total}</p>
            <p><strong>Open Calls:</strong> ${data.openCalls}</p>
            <p><strong>Closed Calls:</strong> ${data.closedCalls}</p>
            <p><strong>Calls to Date:</strong> ${data.callsToDate}</p>          
          `;
        })
        .catch(error => {
          console.error('Error fetching call statistics:', error);
        });
    }
    
    function displayPredictions(predictions) {
      predictionsList.innerHTML = '';
      
      // Display the prediction data
      const predictionItem = document.createElement('li');
      predictionItem.textContent = `Next day: ${predictions.nextDay}`;
      predictionsList.appendChild(predictionItem);
      
      const predictionItem2 = document.createElement('li');
      predictionItem2.textContent = `Next week: ${predictions.nextWeek}`;
      predictionsList.appendChild(predictionItem2);
      
      const predictionItem3 = document.createElement('li');
      predictionItem3.textContent = `Next month: ${predictions.nextMonth}`;
      predictionsList.appendChild(predictionItem3);
    }
    
    function fetchCallPredictions() {
      fetch('/api/predictions')
        .then(response => response.json())
        .then(data => {
          console.log('Received predictions response:', data);
          displayPredictions(data);
        })
        .catch(error => {
          console.error('Error fetching call predictions:', error);
        });
    }

    fetchRecentCalls(); // Call the fetchRecentCalls function to populate the calls list and display the map
    fetchCallStats();
    fetchCallPredictions();
  }

  // Call the initMap function when the Google Maps API is loaded
  window.initMap = initMap;

  // Load the Google Maps API script dynamically
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDm5-nLOhzPDZS3nS7zU3j-d9Jxeby1Ijo&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
});
