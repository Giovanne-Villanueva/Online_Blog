
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();
  const id = event.target.getAttribute('data-id');

  if (title && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    }
    else {
      
      alert('Failed to update blog');
    }

    
  }
};

document
    .querySelector('.edit-blog-form')
    .addEventListener('submit', newFormHandler);