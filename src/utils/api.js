import apisauce from "apisauce";

// define the api

const create = () => {
  const apiGithub = apisauce.create({
    baseURL: "https://api.github.com",
    headers: { Accept: "application/vnd.github.v3+json" }
  });

  const apiHadir = apisauce.create({
    baseURL: "https://hadir-api.herokuapp.com/api/v2"
  });

  const getRepo = reponame => {
    return apiGithub.get(
      `/search/repositories?q=${reponame}&page=1&per_page=10`
    );
  };

  const getUser = username => {
    return apiGithub.get(`/users/${username}`);
  };

  const createStudent = params => {
    return apiHadir.post(`/students`, JSON.stringify(params));
  };

  const getStudent = params => {
    return apiHadir.get(`/student/${params.year}/${params.class}`);
  };

  return {
    getRepo,
    getUser,
    createStudent,
    getStudent
  };
};

export default { create };
