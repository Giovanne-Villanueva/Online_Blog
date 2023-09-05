const button = document.querySelector('.add');
const newBlog = document.querySelector('.create')
const list = document.querySelector('.blog-list')
let state=0;

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
        newBlog.classList.add('hidden');
        list.classList.remove('hidden')
        button.classList.remove('hidden')

      }
    }
  };

const eventHandler = async(event) => {
  if(event.target.hasAttribute('data-option')){
    const option = event.target.getAttribute('data-option')
    const id = event.target.getAttribute('data-id');
    if(option === 'delete'){
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
    else if (option === 'edit'){
      document.location.assign(`/editBlog/${id}`)
    }
  }
}

/*const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };*/

const appearForm = async (event) => {
  event.preventDefault();

  console.log(button)
  console.log(state);

  newBlog.classList.remove('hidden');
  list.classList.add('hidden')
  button.classList.add('hidden')
};
  
document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
document
    .querySelector('.blog-list')
    .addEventListener('click', eventHandler);

document
    .querySelector('.add')
    .addEventListener('click', appearForm);