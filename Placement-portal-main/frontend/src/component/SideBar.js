import { useState, useEffect, useContext } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,

  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import { userType } from "../lib/isAuth";


const SideComponent = (props) => {
    const { job } = props;
    // useEffect(()=>{
    //   // console.log(job.title);
    // })
    // const sal=job.salary;
     if (!job) {
      return null; // or return a loading/error message
    }
  
    return (
      <>
        <Grid container   style={{ padding: "25px" }}>
          <Grid container item xs={12} spacing={1} direction="column" >
            <Grid item>
              <Typography variant="h2">{job.title}</Typography>
            </Grid>
            <Grid item>
              <Rating value={job.rating !== -1 ? job.rating : null} readOnly />
            </Grid>
            <Grid item >Posted By : <b>{job.recruiter.name}</b></Grid>
            <Grid item >Location : <b>{job.location}</b></Grid>
            <Grid item>
          <Typography variant="h5">   Skillsets Required :{" "}</Typography> 
              {job.skillsets.map((skill) => (
                <Chip label={skill} style={{ marginRight: "2px",backgroundColor:"#1976d2", color:"white" }} />
              ))}
            </Grid>
            <Grid item >Job Description : <Typography variant="body1"><pre style={{whiteSpace:"pre-wrap",}}>{job.jobdesc}</pre></Typography></Grid>
            <Grid item>Role : {job.jobType}</Grid>
            <Grid item>Salary : &#8377; {job.salary} per month</Grid>
            <Grid item>
              Duration :{" "}
              {job.duration !== 0 ? `${job.duration} month` : `Flexible`}
            </Grid>
            <Grid item>Application Deadline : {job.deadline}</Grid>
  
           
          </Grid>
        </Grid>
      </>
    )
}

export default SideComponent;
