import React, { Component } from "react";
import { connect } from "react-redux";
// import styled from "styled1-components";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

import "../App.css";
import StudentActions from "../redux/student";

// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: palevioletred;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

class GetStudent extends Component {
  constructor() {
    super();
    this.state = { year: "", classs: "" };
  }

  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getStudent = () => {
    const { year, classs } = this.state;
    this.props.fetchStudent(parseInt(year), classs.toLowerCase());
  };
  render() {
    return (
      <Grid>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={5}>
                <FormControl style={{ width: 200 }}>
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
              <Grid item xs={5}>
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
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.getStudent()}
                >
                  DISPLAY
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Grid container >
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Student ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.studentList &&
                    this.props.studentList.map(student => (
                      <TableRow key={student.id}>
                        <TableCell component="th" scope="row">
                          {student.name}
                        </TableCell>
                        <TableCell>{student.id}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  studentList: state.student.studentList
});

const mapDispatchToProps = dispatch => {
  return {
    fetchStudent: (year, classs) =>
      dispatch(StudentActions.getStudent(year, classs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStudent);
