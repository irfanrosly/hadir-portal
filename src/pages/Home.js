import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

// import GithubActions from "../redux/github";

class Home extends Component {
  state = {
    repoName: "tetris"
  };

  render() {
    return (
      <Grid container style={{ height: "100vh" }}>
        <Grid
          style={{
            width: 600,
            height: 400,
            margin: "auto"
          }}
        >
          <Grid container style={{ height: "50%" }}>
            <Grid item xs={6} style={{ padding: 10 }}>
              <Link to="/student/create" style={{ textDecoration: "none" }}>
                <Grid
                  style={{
                    margin: 5,
                    backgroundColor: "red",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  CREATE STUDENT
                </Grid>
              </Link>
            </Grid>

            <Grid item xs={6} style={{ padding: 10 }}>
              <Link to="/student/display" style={{ textDecoration: "none" }}>
                <Grid
                  style={{
                    margin: 5,
                    backgroundColor: "yellow",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  DISPLAY STUDENT
                </Grid>
              </Link>
            </Grid>
          </Grid>
          <Grid container style={{ height: "50%" }}>
            <Grid item xs={6} style={{ padding: 10 }}>
              <Grid
                style={{
                  margin: 5,
                  backgroundColor: "green",
                  width: "100%",
                  height: "100%"
                }}
              >
                TIGA
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                padding: 10,
                borderColor: "red",
                borderWidth: 1
              }}
            >
              <Grid
                style={{
                  margin: 5,
                  backgroundColor: "magenta",
                  width: "100%",
                  height: "100%"
                }}
              >
                EMPAT
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  // test: state.github.text,
  // repoList: state.github.repoList,
  // userDetails: state.github.userDetails
});

const mapDispatchToProps = dispatch => {
  return {
    // searchRepo: repoName => dispatch(GithubActions.searchRepo(repoName)),
    // searchUser: username => dispatch(GithubActions.searchUser(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
