import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,

} from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{backgroundColor:'#003366'}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="/" color="inherit" underline="none">
            <img src='./logo2.png' style={{height:'50px', width:'70px', marginTop:'8px'}} />
            {/* <img src='./logobig.png' style={{height:'50px', width:'100px'}} /> */}
            <span style={{verticalAlign:'13px' ,fontSize:'35px'}}>HIRE HUB</span>
          </Link>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              {/* <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button> */}
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
