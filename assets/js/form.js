// DEPENDENCIES
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-msg');

// FUNCTIONS
function displayMessage(type, message) {
    errorMessage.textContent = message;
    errorMessage.setAttribute('class', type);
  }

// EVENT LISTENERS

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Username cannot be left blank.');
    } else if (title === '') {
       displayMessage('error', 'Title cannot be left blank.');
    } else if (content === '') {
        displayMessage('error', 'Cannot submit empty blog post.');
    } else {
        displayMessage('success', 'Post successfully submitted!');

    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    window.location.href = "blog.html";
    }
});