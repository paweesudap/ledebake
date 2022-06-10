import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink} from 'react-router-dom';
import "./Login.css"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        email: data.get('email'),
        password: data.get('password'),
    }

    fetch('http://localhost:4444/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'ok'){
            alert('login success')
            localStorage.setItem('token', data.token)
            window.location = '/Home'
        }else{
            alert('login failed')
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  };

  return (    
            <Box component="form" noValidate onSubmit={handleSubmit}>
            <div className="containerr">
      <div className="contentja">
        <br></br>
      <div className="box-regis" >
        <div className="nameh" id="fon">
          WELCOME
        </div>
        <div className="de" id="fon">login to your account to continue</div>
        <div>
        <div class="logo"></div>
          <div class="login-block">
          <input type="text"  placeholder="Username" margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus />
          <input placeholder="Password" margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password" />
          <div>
          <button id="fon" type="submit"
                fullWidth
                variant="contained">LOGIN</button>
          </div>
          <NavLink href="#" variant="body2" id='fonn' to="/Register">
                    {"Don't have an account? Sign Up"}
                  </NavLink>
        </div>
        </div>
        </div>
      </div>
    </div>
            </Box>
      
  );
}