const today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let date = `${month}-${day}-${year}`;


const newBlogFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value;
    const content = document.querySelector('#blog-content').value;
    
    if (title && content) {
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, content, date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create a new blog.');
      }
    }
  };
  
  
  document
    .querySelector('#new-blog-form')
    .addEventListener('submit', newBlogFormHandler);