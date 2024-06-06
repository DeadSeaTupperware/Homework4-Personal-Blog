const backButton = document.querySelector('#back-button');

function init() {
  const blogPostList = localStorage.getItem('blogPostList');
  const blogPostsParsed = JSON.parse(blogPostList);
  console.log(blogPostsParsed);
}

  init();

  backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });


