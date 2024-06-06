// DEPENDENCIES
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-msg');
const blogPostList = [];

// FUNCTIONS

// Error Message Display
function displayMessage(type, message) {
    errorMessage.textContent = message;
    errorMessage.setAttribute('class', type);
  }

// EVENT LISTENERS

// Listens for click on submit button
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

    // Creates object with paramaters of form data
    let blogPost = {
        username: username,
        title: title,
        content: content
    };

    // Creates array if localStorage is empty. If not, grabs the existing array.
    let blogPostList = JSON.parse(localStorage.getItem('blogPostList')) || [];
    // Adds blog post object to the array.
    blogPostList.push(blogPost);
    // Stringify and store array in localStorage.
    let jsonList = JSON.stringify(blogPostList);
    localStorage.setItem('blogPostList', jsonList);

    // Moves to blog page.
    window.location.href = "blog.html";
    }
});