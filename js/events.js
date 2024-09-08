// Adjust UI based on login state

document.addEventListener('DOMContentLoaded', () => {
  const loggedin = getCookie('localusername');

  // Hide login link if user is logged in
  const eventform = document.getElementById('eventform');
  if (loggedin) {
      eventform.style.display = 'block';
  }
});

const calendarContainer = document.getElementById('calendar');

const events = [
    { date: '2024-09-10', title: 'Event 1' },
    { date: '2024-09-12', title: 'Event 2' },
// Function to create a calendar grid
function createCalendarGrid(year, month) {
    // ... logic to create the grid based on the year and month
  }
function poulateEvents(events)
{
 //logic
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
createCalendarGrid(currentYear, currentMonth);
populateEvents(events);