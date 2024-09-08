// Adjust UI based on login state

document.addEventListener('DOMContentLoaded', () => {
  const loggedin = getCookie('localusername');

  // Hide login link if user is logged in
  const eventform = document.getElementById('eventform');
  if (loggedin) {
      eventform.style.display = 'block';
  }
  fetch('/eventinfo')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Update the page with the received data
      for (let event of data.data){

      <div class="project">
          <h3>Food Sorting at Food Bank</h3>
          <p>2023-12-19</p>
      </div>
      }
      document.getElementById('projects').innerHTML += `
          <p>Message: ${data.message}</p>
          <p>Timestamp: ${data.timestamp}</p>
      `;
      <div class="project">
          <h3>Food Sorting at Food Bank</h3>
          <p>2023-12-19</p>
      </div>
  })
  .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
  });
});

const calendarContainer = document.getElementById('calendar');