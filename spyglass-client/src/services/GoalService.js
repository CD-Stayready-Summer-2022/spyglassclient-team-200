import axios from "axios";
const GOAL_BASE_API_URI = "http:://localhost:8080:/api/v1/goals";

export function createGoal(goal) {
  return axios.post(`${GOAL_BASE_API_URI}/create${id}`, goal);
}

export function getByStatus(statusDTO) {
  return axios.get(`${GOAL_BASE_API_URI}/getByStatus`, statusDTO);
}

export function getGoalById(id) {
  return axios.get(`${GOAL_BASE_API_URI}/${id}`);
}
export function getAllGoalsFromUser(id) {
  return axios.get(`${GOAL_BASE_API_URI}/${id}/goals`, id);
}
export function deleteGoal(id) {
  return axios.delete(`${GOAL_BASE_API_URI}/${id}`);
}
export function updateGoal(id, goal) {
  return axios.put(`${GOAL_BASE_API_URI}/${id}`, goal);
}
