# Auth - A Restful API with JWT tokenization

=> Features:-

1. Make a post request to '<server>\api\user\register' in order to register a user.

  Sample request parameters:
  {
    "name": "Rahul",
    "email": "rahul.khatwani@gmail.com",
    "password": "abc123"
  }

3. Validations included.

  a. name is string, min 6 characters, max 255 characters and required.
  b. email is string, valid, doesn't exists already, min 6 characters, max 255 characters and required.
  c. password is string, min 6 characters, max 1024 characters and required.

4. Passwords will be stored as after hashing using bcryptjs

5. After a successful request, it will store the user details on MongoDB Atlas or else will response with the validation message.

6. Make a post request to '<server>\api\user\login' in order to login a user.
  
  Sample request parameters:
  {
    "email": "rahul.khatwani@gmail.com",
    "password": "abc123"
  }

7. Validations included.

  a. email is string, valid, exists or not, min 6 characters, max 255 characters and required.
  b. password is string, min 6 characters, max 1024 characters, same as entered while registering and required.
  
8. After a successful request, it will login the user or else will response with the validation message.

9. Make a get request to '<server>\api\login' in order to get the posts.

10. It will use the jwt authentication to check whether the user is the same user who logged in and if not it will throw message as "Access Denied!".
