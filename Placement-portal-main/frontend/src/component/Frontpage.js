import React from 'react'
import { Typography, Container } from '@mui/material';



function Frontpage() {
    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
    
      const textStyles = {
        fontSize: '24px',
        textAlign: 'center',
      };
    
      return (
        
        <div style={containerStyles}>
          <Typography variant="h1" >Welcome</Typography>
        </div>
      );
    };



  


export default Frontpage
