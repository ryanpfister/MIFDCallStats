document.addEventListener('DOMContentLoaded', () => {
  const callsList = document.getElementById('calls-list');
  const statsContainer = document.getElementById('stats-container');

  function displayCalls(calls) {
    callsList.innerHTML = '';
  
    // Sort the calls in descending order based on the call ID
    const sortedCalls = calls.sort((a, b) => b.incnum - a.incnum);
  
    sortedCalls.forEach(call => {
      const callItem = document.createElement('li');
      callItem.innerHTML = `
        <div>
          <p><strong>Call ID:</strong> ${call.incnum}</p>
          <p><strong>Call Time</strong> ${call.datetimealarm}</p>
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

  function displayStats(stats) {
    statsContainer.innerHTML = '';
  
    const statsTitle = document.createElement('h2');
    statsTitle.textContent = 'Call Statistics';
    statsContainer.appendChild(statsTitle);
  
    const numCalls = document.createElement('p');
    numCalls.textContent = `Number of Calls: ${stats.total}`;
    statsContainer.appendChild(numCalls);
  
    if (stats.calls && Array.isArray(stats.calls)) {
      stats.calls.forEach(call => {
        const callType = document.createElement('p');
        const icon = call.icon;
  
        if (icon === 'EMS') {
          callType.textContent = `Call Type: EMS`;
        } else if (icon === 'FIRE') {
          callType.textContent = `Call Type: FIRE`;
        } else {
          callType.textContent = `Call Type: Unknown`;
        }
  
        statsContainer.appendChild(callType);
      });
    } else {
      const noCalls = document.createElement('p');
      noCalls.textContent = 'No call statistics available.';
    }
  }

  

  function fetchRecentCalls() {
    fetch('/api/calls')
      .then(response => response.json())
      .then(data => {
        console.log('Received calls response:', data);
        displayCalls(data);
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
        displayStats(data);
      })
      .catch(error => {
        console.error('Error fetching call statistics:', error);
      });
  }

  fetchRecentCalls();
  fetchCallStats();
});
