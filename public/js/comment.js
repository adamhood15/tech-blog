document.querySelector('#author-id').style.display = 'none';

const blog_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 2
];


const commentFormHandler = async (event) => {
    event.preventDefault();

    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const date = `${month}-${day}-${year}`;

    const content = document.querySelector('#comment-content').value;
    const author_id = document.querySelector('#author-id').value;

    console.log(content, date, author_id, blog_id);

    if (content) {
      const response = await fetch(`/api/blog/${blog_id}/comment`, {
        method: 'POST',
        body: JSON.stringify({ content, date, author_id, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        console.log('Comment added successfully');
      } else {
        alert('Failed to add a new comment.');
      }
    }
  };
  
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);