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
      document.getElementById('projects').innerHTML += `

      <div class="project">
          <h3>${event.name}</h3>
          <h2>Date: ${event.date}</h2>
          <h2>Location: ${event.location}</h2>
          <p>${event.description}</p>
      </div>
      `;
      }
  })
  .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
  });
});

const calendarContainer = document.getElementById('calendar');