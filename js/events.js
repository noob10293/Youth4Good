// Adjust UI based on login state

document.addEventListener('DOMContentLoaded', () => {
  const loggedin = getCookie('localusername');

  // Hide login link if user is logged in
  const eventform = document.getElementById('eventform');
  if (loggedin) {
      eventform.style.display = 'block';
  }
  fetch('/data')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON data from response
  })
  .then(data => {
      // Update the page with the received data
      document.getElementById('result').innerHTML = `
          <p>Message: ${data.message}</p>
          <p>Timestamp: ${data.timestamp}</p>
      `;
  })
  .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
  });
});

const calendarContainer = document.getElementById('calendar');