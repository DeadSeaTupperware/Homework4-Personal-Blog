// DEPENDENCIES
const backButton = document.querySelector('#back-button');
const blogContent = document.querySelector('#blog-content');
const clearButton = document.querySelector('#clear-button');
let blogPosts = [];

// FUNCTIONS

// Grabs the JSON blog post array from localStorage, parses it back into array of objects
// to be used by other functions.
function init() {
  const blogPostList = localStorage.getItem('blogPostList');
  const blogPostsParsed = JSON.parse(blogPostList);

  if (blogPostsParsed !== null) {
    blogPosts = blogPostsParsed;
  }
  console.log(blogPosts);
  renderBlog();
}

init();

// Renders a list element for each blog post.
function renderBlog() {
  for (let i = 0; i < blogPosts.length; i++) {
    let currentPost = blogPosts[i];

    const li = document.createElement('li');
    li.setAttribute('id', 'blog-post-li')
    blogContent.appendChild(li);

    const postTitle = document.createElement('p');
    postTitle.setAttribute('id', 'blog-post-title');
    postTitle.textContent = currentPost.title;
    li.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.setAttribute('id', 'blog-post-content');
    postContent.textContent = currentPost.content;
    li.appendChild(postContent);

    const postAuthor = document.createElement('p');
    postAuthor.setAttribute('id', 'blog-post-author');
    postAuthor.textContent = 'Posted by: ' + currentPost.username;
    li.appendChild(postAuthor);
  }

}

// EVENT LISTENERS

// Checks for clicks on the back button to return to landing page.
backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });

// Checks for clicks on the clear button and clears all objects from localStorage.
clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();
  window.location.href = "blog.html";
});


