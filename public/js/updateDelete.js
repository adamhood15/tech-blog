//Grabs authorid from hidden p tag in html
document.querySelector('#author-id').style.display = 'none';
//grabs blog id from the url
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
  ];

document.querySelector('#author-id').style.display = 'none';

const updateFormHandler = async (event) => {
    event.preventDefault();
        //establishes the date
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        const date = `${month}-${day}-${year}`;

        const title = document.querySelector('#update-title').value;
        const content = document.querySelector('#update-content').value;
        const author_id = document.querySelector('#author-id').innerHTML;

        if (title && content) {
            const response = await fetch(`/api/blog/${id}`, {
              method: 'PUT',
              body: JSON.stringify({ date, title, content, author_id  }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (response) {
              document.location.replace('/dashboard');
            } else {
              alert('Failed to update blog.');
            }
          } else {
            alert('You must have something inside your title and content boxes to update your post.');
          }
};

//deletes selected blog with the specified id
const deleteFormHandler = async (event) => {
    event.preventDefault();
    console.log(id);

    const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete the blog.');
    }

};

    
  
  document
    .querySelector('#update-delete-form')
    .addEventListener('submit', updateFormHandler);

document
    .querySelector('#delete')
    .addEventListener('click', deleteFormHandler);