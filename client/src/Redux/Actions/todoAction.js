import axios from "axios";

//Actions Defined
export const ADD_TODO = "Add Todo";
export const GET_TODO = "Get Todo";
export const TOOGLE_TODO = "Toggle Todo";
export const UPDATE_TODO = "Update Todo";
export const DELETE_TODO = "Delete Todo";
export const TOOGLE_TAB = "Toggle Tab";

export const ALL_TODO = "All Todos";
export const ACTIVE_TODOS = "Active Todos";
export const DONE_TODOS = "Done Todos";
export const TABS = [ALL_TODO, ACTIVE_TODOS, DONE_TODOS];



//Server Url
const API_URL = "http://localhost:5000/";


//Add Todo Action 
export const addTodo = (data) => async (dispatch) => {
  try {
    const task = await axios.post(`${API_URL}add`, { data });
    dispatch({ type: ADD_TODO, payload: task.data });
  } catch (error) {
    console.log("Error while calling Add new todo API. --->Error", error);
  }
};


//Get Todo Action
export const getTodo = () => async (dispatch) => {
  try {
    const task = await axios.get(`${API_URL}get`);
    dispatch({ type: GET_TODO, payload: task.data });
  } catch (error) {
    console.log("Error while calling Get todo API. --->Error", error);
  }
};


//Toggle Todo Action
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const task = await axios.get(`${API_URL}toggle/${id}`);
    dispatch({ type: TOOGLE_TODO, payload: task.data });
  } catch (error) {
    console.log("Error while calling Toggle todo API. --->Error", error);
  }
};


//Update Todo Action
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    // console.log("Update");
    const task = await axios.put(`${API_URL}update/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: task.data });
  } catch (error) {
    console.log("Error while calling Update todo API. --->Error", error);
  }
};


//Delete Todo Action
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const task = await axios.delete(`${API_URL}delete/${id}`);
    dispatch({ type: DELETE_TODO, payload: task.data });
  } catch (error) {
    console.log("Error while calling Delete todo API. --->Error", error);
  }
};


//Toggle Tab Action
export const toggleTab = (tab) => async (dispatch) => {
  try {
    dispatch({ type: TOOGLE_TAB, filter: tab });
  } catch (error) {
    console.log("Error in Toggling Tab. --->Error", error);
  }
};
