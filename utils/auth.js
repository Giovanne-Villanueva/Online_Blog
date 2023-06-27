const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        //console.log('I got here failing to reload')
      res.redirect('/login');
    } else {
        //console.log('I will continue with not worries')
      next();
    }
  };
  
module.exports = withAuth;