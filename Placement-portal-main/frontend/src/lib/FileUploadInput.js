import { useState } from "react";
import { Grid, Button, TextField, LinearProgress } from "@mui/material";
import { CloudUpload } from "@material-ui/icons";
const FileUploadInput = (props) => {
  const [file,setFile]=useState()
  const { identifier, handleInput } = props;
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleUpload = (e) => {
    const file=e.target.files;
    if(file && file.length>0){
    const reader = new FileReader();
    reader.readAsBinaryString(file[0]);
    reader.onload = () => {
      handleInput(identifier,window.btoa(reader.result));
    };
  }      
  };

  return (
    <Grid container item xs={12} direction="column" className={props.className}>
      <Grid container item xs={12} spacing={0}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            component="label"
            style={{ width: "100%", height: "100%" }}
          >
            {props.icon}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(event) => {
                setUploadPercentage(0);
                setFile(event.target.files[0]);
                handleUpload(event);
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={props.label}
            value={file ? file.name || "" : ""}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%", height: "100%" }}
            onClick={(e) => handleUpload(e)}
            disabled={file ? false : true}
          >
            <CloudUpload />
          </Button>
        </Grid>
      </Grid>
      {uploadPercentage !== 0 ? (
        <Grid item xs={12} style={{ marginTop: "10px" }}>
          <LinearProgress variant="determinate" value={uploadPercentage} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FileUploadInput;