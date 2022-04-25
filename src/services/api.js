import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function getTests(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/tests/:tab`, config);

  return promise;
}

function getCategories(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/categories`, config);

  return promise;
}

function getTerms(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/terms`, config);

  return promise;
}


function getSubjects(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/disciplines`, config);

  return promise;
}

function getSubjectsByTerms(termId) {
  const promise = axios.get(`${BASE_URL}/terms/${termId}/disciplines`);

  return promise;
}

function getTestsBySubject(subjectId) {
  const promise = axios.get(`${BASE_URL}/subjects/${subjectId}/tests`);

  return promise;
}

function getInstructors(token){
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/teachers`, config);

  return promise;
}

function getTestsByInstructor(instructorId){
  const promise = axios.get(`${BASE_URL}/teachers/${instructorId}/tests`);

  return promise;
}




const api = {
  login,
  signUp,
  getTests,
  getCategories,
  getTerms,
  getSubjects,
  getSubjectsByTerms,
  getTestsBySubject,
  getInstructors,
  getTestsByInstructor
}

export default api;