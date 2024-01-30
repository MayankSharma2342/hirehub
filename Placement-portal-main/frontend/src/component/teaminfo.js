import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const TeamPage = () => {
  const teamMembers = [
    { name: 'Jasmeet Singh', role: 'Backend Developer', image: 'team/Jasmeet.png' },
    { name: 'Naman Attlee', role: 'Backend Developer', image: 'https://media.licdn.com/dms/image/D4D35AQHZu7psPuCM_g/profile-framedphoto-shrink_800_800/0/1670647527210?e=1686722400&v=beta&t=-z15V3fbcXtCZW4_Dos16Hm_7z3hRlSXY8zGdyVPN9Q' },
    { name: 'Manav Gupta', role: 'Database and Content Manager', image: 'team/Manav.jpeg' },
    { name: 'Mayank Sharma', role: 'Frontend Developer', image: 'team/Mayank.jpeg' },
  ];

  return (
    <Container >
      <Typography variant='h3' align='center' margin={8}>OUR TEAM MEMBERS</Typography>
    <Grid container spacing={2}>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={member.image}
              alt={member.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default TeamPage;