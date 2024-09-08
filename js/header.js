// Adjust UI based on login state

document.addEventListener('DOMContentLoaded', () => {
    const loggedin = getCookie('localusername');

    // Hide login link if user is logged in
    const eventform = document.getElementById('eventform');
    if (loggedin) {
        eventform.style.display = 'block';
    }
});
