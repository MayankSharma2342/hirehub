import * as React from 'react';
import { Typography, Button, Container, Grid, Paper, Box } from "@mui/material";
import image from "./images/home.svg";
import AboutUs from './aboutus';
import ContactUs from './contactus';
import TeamPage from './teaminfo';
const Welcome = (props) => {
  return (
    <div>

      <Box my='50px' py='20px'>

        <Grid container spacing={0}>


          <Grid xs={6}  >
            <Grid xs={12}>
              <Typography variant="h1" align='center' color='primary' fontWeight={500} gutterBottom >
                HIREHUB</Typography></Grid>


            <Grid xs={12}>
              <Typography variant="h3" align='center' div gutterBottom>
                A Placement Portal...</Typography></Grid>

            <Grid xs={12}>
              <Typography variant="h4" align='center' div gutterBottom >
                Where the appropriate set of opportunities<br></br> meet the best collection of skills.</Typography></Grid>

            <Grid xs={12}  >
              <Typography variant="h2" color='#f50057' align='center' fontWeight={400} div gutterBottom >
                Lets Get Dream Job</Typography>
            </Grid>




          </Grid>
          <Grid xs={6}>
            <Box
              component="img"
              sx={{
                height: "100%",
                display: 'block',

                overflow: 'hidden',
                width: '100%',
              }}
              src={image}
              alt="imagenotfound"
            />
          </Grid>


        </Grid>

      </Box>

      {/*  */}



      {/* reqquired */}

      <Box my='15px' >
        <Container disableGutters  >
          <Typography variant="h2" align="center" paragraph fontWeight="bold">
            WHY IS IT REQUIRED ?
          </Typography>
          <div className='whytext'>


            <Typography variant="h6" align="justify" gutterBottom paragraph >
              Manual Placement which is done at various colleges is by human intervention due to which there is a maximum chance of errors. Placement officers have to manage the student’s profile and their documents and also have to collect the information of various companies who comes for recruitment. They have to arrange profiles of students according to various streams and notify them each time according to company requirements. They are also required to submit the information of students and if any changes or updates are required in the profile of any student, it has to be done manually. This process is so difficult and tedious when the number of students increases. Therefore, a Placement Management System is very useful.
            </Typography>

            <Typography variant="h6" align=" justify" gutterBottom paragraph >
              Database Management System is a software for storing and retrieving users ' data while considering appropriate security measures. It consists of a group of programs which manipulate the database. The DBMS accepts the request for data from an application and instructs the operating system to provide the specific data. In large systems, a DBMS helps users and other third-party software to store and retrieve data. DBMS allows users to create their own databases as per their requirement. It provides an interface between the data and the software application.
            </Typography>

            <Typography variant="h6" align="justifyr" gutterBottom paragraph>
              Placement Management System is a web App which provides information on placement providers and the placements and also keeps up to date information of all students. It is a platform where students can view and assess their opportunities. The system will be having different types of interfaces for different type of users – Admin or Student
            </Typography>
          </div>


        </Container>
      </Box>

      <AboutUs />
      <TeamPage />
      <ContactUs />

    </div>


  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
