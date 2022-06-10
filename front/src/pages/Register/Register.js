import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink} from 'react-router-dom';
import "./register.css"
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

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        email: data.get('email'),
        password: data.get('password'),
        fname: data.get('firstName'),
        lname: data.get('lastName'),
    }

    fetch('http://localhost:4444/register', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    
    .then(data => {
        console.log(data)
        if(data.starus === 'ok'){
            alert('register success')
            window.location = '/login'
        }else{
            alert('register failed')
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
      <div className="box-register" >
        <div className="nameh" id="fon">
          REGISTER
        </div>
        
        <div>
        <div class="logo"></div>
          <div class="loginn-block">
          <input type="text" placeholder="firstname" margin="normal"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
          <input type="text" placeholder="lastname" margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
          <input type="text"  placeholder="Email" margin="normal"
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
                variant="contained">REGISTER</button>
          </div>
          <NavLink href="#" variant="body2" id='fonn' to="/Login">
                    {"Have an account? Login"}
                  </NavLink>
        </div>
        </div>
        </div>
      </div>
    </div>
            </Box>
      
  );
}