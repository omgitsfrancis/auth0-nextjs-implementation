# Auth0 Implementation with Next.js
This is a sample implementation of Auth0 in a Next.js project. In the future, I'll probably use this a reference for building an application that requires user authentication.

This project includes my personal Auth0 client ID.

## Setup
```
git clone https://github.com/omgitsfrancis/auth0-nextjs-implementation
cd auth0-nextjs-implementation
npm install
```

## Run in Development Environment
```
npm run dev
```

## Usage

Navigate to http://localhost:3000/login. To login, click the login button or navigate to a page that requires authentication. To logout, click the logout button.

### Available pages:
 - Login - http://localhost:3000/login
   - The only page that doesn't require authentication
   - On logout, you will be redirected to the login page
 - Home - http://localhost:3000/
   - Requires authentication
   - On login, you will be redirected to the home page
 - Profile - http://localhost:3000/profile
   - Requires authentication
   - Displays profile info (name, email)