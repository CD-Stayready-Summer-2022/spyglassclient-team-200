
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CurrencyInput from 'react-currency-input-field';
import ReactDateInputs from 'react-date-inputs';



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

export function CreateGoal() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Icon>+</Icon>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Your Goal
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 12 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-goal"
                  name="goal"
                  required
                  fullWidth
                  id="goal-title"
                  label="Title of your Goal"
                  autoFocus
                />
              </Grid>
              <Grid item xs={13} sm={10}>
               <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Goal Description"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                style={{ width: 200 }}
                />
              </Grid>
            
              <Grid item xs={12}>
                <CurrencyInput
                    id="input-example"
                    name="input-name"
                    placeholder="Please enter your target "
                    defaultValue={0}
                    decimalsLimit={2}
                    onValueChange={(value, name) => console.log(value, name)}
                    />
              </Grid>
              
              <Grid item xs={12}>
                <CurrencyInput
                    id="input-example"
                    name="input-name"
                    placeholder="enter current saved amount "
                    defaultValue={0}
                    decimalsLimit={2}
                    onValueChange={(value, name) => console.log(value, name)}
                    />
            
              </Grid>
               <Grid item xs={12}>
                 <TextField
                  autoComplete="goal-date"
                  name="goal"
                  required
                  fullWidth
                  id="goal-date"
                  label="Target Date"
                  autoFocus
                />
   
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
         
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Goal
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
            
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
        }