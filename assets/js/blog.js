const blogPosts = [];

function init() {
    const username = localStorage.getItem('username');
    const title = localStorage.getItem('title');
    const content = localStorage.getItem('content');

    const post = {}
        post.username = username;
        post.title = title;
        post.content = content;
  
    if (!username || !title || !content) {
      return;
    }

    blogPosts.push(post);

    console.log(blogPosts);

  }

// Pull username, title, and content from localStorage.
// Put those elements into a blog post object.
// Convert object to string and store in localStorage.
// Add those objects into an array of objects.
// Get stored objects from array and add to list item.

init();