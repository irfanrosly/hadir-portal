import React, { Component } from "react";
import {
  Grid,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button
} from "@material-ui/core";

import { connect } from "react-redux";
import StudentActions from "../redux/student";
class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      year: "",
      classs: ""
    };
  }

  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeId = event => {
    this.setState({
      id: event.target.value
    });
  };

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  submitStudent = () => {
    const { id, name, year, classs } = this.state;
    if (id && name && year && classs) {
      this.props.createStudent(id, name, parseInt(year), classs.toLowerCase());
    } else {
      alert("Fill in all the details!");
    }
  };

  render() {
    return (
      <Grid container style={{ height: "100vh" }}>
        <Grid
          style={{
            width: 600,
            height: 600,
            margin: "auto"
          }}
        >
          <Grid>
            <TextField
              label="ID"
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeId}
              style={{ width: "50%" }}
              inputProps={{ maxLength: 6 }}
            />
          </Grid>
          <Grid>
            <TextField
              style={{ width: "50%" }}
              label="Name"
              margin="normal"
              variant="outlined"
              onChange={this.handleChangeName}
            />
          </Grid>
          <Grid>
            <FormControl style={{ width: "50%" }}>
              <InputLabel htmlFor="year-simple">Year</InputLabel>
              <Select
                value={this.state.year}
                onChange={this.handleChangeSelect}
                inputProps={{
                  name: "year",
                  id: "year-simple"
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid style={{ width: "100%" }}>
            <FormControl style={{ width: "50%" }}>
              <InputLabel htmlFor="class-simple">Class</InputLabel>
              <Select
                value={this.state.classs}
                onChange={this.handleChangeSelect}
                inputProps={{
                  name: "classs",
                  id: "class-simple"
                }}
              >
                <MenuItem value="Abba">Abba</MenuItem>
                <MenuItem value="Alch">Alch</MenuItem>
                <MenuItem value="Mogu">Mogu</MenuItem>
                <MenuItem value="Trea">Trea</MenuItem>
                <MenuItem value="Trax">Trax</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.submitStudent()}
            style={{ marginTop: 30 }}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  // testing: state.playground.text
});

const mapDispatchToProps = dispatch => {
  return {
    createStudent: (id, name, year, classs) =>
      dispatch(StudentActions.createStudent(id, name, year, classs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStudent);
