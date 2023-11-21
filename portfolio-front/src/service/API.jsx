export const baseURL = "http://localhost:3001";

export const fetchInfo = {
  signup : `${baseURL}/api/auth/signup`,
  login: `${baseURL}/api/auth/login`,
  projects:  `${baseURL}/api/projects`,
  skills:  `${baseURL}/api/skills`,
};

export const Routes = {
getAllProjects:  `${baseURL}/projects`,
getOneProject: `${baseURL}/projects/:id`,
createProject: `${baseURL}/projects`,
modifyProject: `${baseURL}/projects/:id`,
deleteProject: `${baseURL}/projects/:id`,
getAllSkills:  `${baseURL}/skills`,
getOneSkill: `${baseURL}/skills/:id`,
createSkill: `${baseURL}/skills`,
modifySkill: `${baseURL}/skills/:id`,
deleteSkill: `${baseURL}/skills/:id`,
}
