

function submitUsername (){
    const usernameInput = document.getElementById('username');
    const username =usernameInput.value.trim();

    if (username) {
        const existingUsernames = JSON.parse(localStorage.getItem('usernames')) || [];
        existingUsernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(existingUsernames));

        usernameInput.value = '';
        alert(`username "{$username}" has been stored in local storage`);
    } else {
        alert('please enter a valid username')
    }
}

function showUsernames (){
    const storedUsernames = JSON.parse(localStorage.getItem('usernames'));
    const displayArea = document.getElementById('storedUsernames');
    if (storedUsernames && storedUsernames.length > 0 ) {
        displayArea.innerHTML = storedUsernames.join('<br/>');
    } else {
        displayArea.innerHTML = 'no username stored';
    }
}

module.exports ={ submitUsername, showUsernames};