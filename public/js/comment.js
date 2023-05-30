const today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let date = `${month}-${day}-${year}`;

document.getElementById("blog-id").style.display = "none";


const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value;

    if (content) {
      const response = await fetch(`/api/blog/${blog_id}/comment`, {
        method: 'POST',
        body: JSON.stringify({ content, date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add a new comment.');
      }
    }
  };
  
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);