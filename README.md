# Auth - A Restful API with JWT Authentication

Features:-

1. Make a post request to '&lt;server-path&gt;\api\user\register' in order to register a user.

	<b>Sample request parameters:</b>
  {
    "name": "Rahul",
    "email": "rahul.khatwani@gmail.com",
    "password": "abc123"
  }

3. Validations included for registration.

	a. name is string, min 6 characters, max 255 characters and required. <br/>
	b. email is string, valid, doesn't exists already, min 6 characters, max 255 characters and required. <br/>
	c. password is string, min 6 characters, max 1024 characters and required.

4. Passwords will be stored as after hashing using bcryptjs

5. After a successful request, it will store the user details on MongoDB Atlas or else will response with the validation message.

6. Make a post request to '&lt;server-path&gt;\api\user\login' in order to login a user.
  
	<b>Sample request parameters:</b>
  {
    "email": "rahul.khatwani@gmail.com",
    "password": "abc123"
  }

7. Validations included for login.

	a. email is string, valid, exists or not, min 6 characters, max 255 characters and required. <br/>
	b. password is string, min 6 characters, max 1024 characters, same as entered while registering and required.
  
8. After a successful request, it will login the user or else will response with the validation message.

9. Make a get request to '&lt;server-path&gt;\api\login' in order to get the posts.

10. It will use the jwt authentication to check whether the user is the same user who logged in and if not it will throw message as "Access Denied!".
