import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import Navbar from './Navbar';
const AboutUs = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Box marginTop={5} id='about' sx={{ bgcolor: 'white', py: 4 }}>
      <Box sx={{ maxWidth: 1000, mx: 'auto', px: 3 }}>
        <Typography variant="h2" align="center"  fontWeight={700} mb={6}>
          About Us
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" color="#003C71" fontWeight={600} mb={3}>
                Our Vision
              </Typography>
              <Typography variant="h5" color="#555" fontWeight={500}>
                To be the best placement portal, connecting employers and job seekers worldwide.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" color="#003C71" fontWeight={600} mb={3}>
                Our Mission
              </Typography>
              <Typography variant="h5" color="#555" fontWeight={500}>
                To create a platform for job seekers to find the right jobs and for employers to find the right candidates.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h4" color="#003C71" fontWeight={600} mb={3}>
                Our Values
              </Typography>
              <Typography variant="h5" color="#555" fontWeight={500} mb={1}>
                <ul>
                  <li>Integrity</li>
                  <li>Professionalism</li>
                  <li>Innovation</li>
                  <li>Customer Satisfaction</li>
                  <li>Teamwork</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default AboutUs;