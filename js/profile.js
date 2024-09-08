
document.addEventListener('DOMContentLoaded', () => {
    const loggedin = getCookie('localusername');

    const name = document.getElementById('name');
    if (loggedin) {
        loginLink.style.display = 'none';
        profile.style.display = 'block';
    }
});
