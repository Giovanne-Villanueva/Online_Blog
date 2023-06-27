let state = 0;

const submitFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log('\n')
    console.log(name)
    console.log('\n')
    console.log(password)
    console.log('\n')

    if( (state === 0) && name && password){
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else if( (state === 1) && name && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
  };
  
  const changeFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('.title');
    const option = document.querySelector('.option');
    
    if(state === 1){
        title.textContent = 'Login';
        option.textContent = 'Sign Up Instead'
        state--;
    }
    else{
        title.textContent = 'Sign Up'
        option.textContent = 'Login Instead'
        state++;
    }
  };
  
  document
    .querySelector('.form')
    .addEventListener('submit', submitFormHandler);

    document
    .querySelector('.option')
    .addEventListener('click', changeFormHandler);