// DEPENDENCIES
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-msg');
const blogPostList = [];

// FUNCTIONS
function displayMessage(type, message) {
    errorMessage.textContent = message;
    errorMessage.setAttribute('class', type);
  }

// EVENT LISTENERS

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let username = usernameInput.value;
    let title = titleInput.value;
    let content = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Username cannot be left blank.');
    } else if (title === '') {
       displayMessage('error', 'Title cannot be left blank.');
    } else if (content === '') {
        displayMessage('error', 'Cannot submit empty blog post.');
    } else {
        displayMessage('success', 'Post successfully submitted!');

    // localStorage.setItem('username', username);
    // localStorage.setItem('title', title);
    // localStorage.setItem('content', content);

    let blogPost = {
        username: username,
        title: title,
        content: content
    };

    blogPostList.push(blogPost);
    let jsonList = JSON.stringify(blogPostList);
    localStorage.setItem('blogPostList', jsonList);

    window.location.href = "blog.html";
    }
});