let state=0;

const submitFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const description = document.querySelector('#comment').value.trim();
    const blog_id = document.querySelector('#comment').dataset.id;
    if( comment ){
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ description, blog_id}),
        headers: { 'Content-Type': 'application/json' },
        });
        
        console.log(response)
        if(response.redirected){
            document.location.replace(response.url);
        }
        else if (response.ok) {
            // If successful, redirect the browser to the blog page with comment
            document.location.reload();
        } 
        else {
            alert(response.statusText);
        }
    }
  };

const appearForm = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const button = document.querySelector('.add');
    const form = document.querySelector('.form')
    console.log(button)
    console.log(state);
    if( state === 1 ){
        form.classList.add('hide')
        button.textContent='Add a Comment'
        state--;
    }
    else{
        form.classList.remove('hide');
        button.textContent='Cancel making Comment';
        state++;
    }
  };

document
    .querySelector('.form')
    .addEventListener('submit', submitFormHandler);

document
    .querySelector('.add')
    .addEventListener('click', appearForm);