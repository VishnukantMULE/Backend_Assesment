# taskcreator

# Task Management API Documentation

This documentation provides details about the endpoints available in the Task Management API.

## Base URL
All endpoints are relative to the base URL:



## User Endpoints

### Create User
- **Endpoint:** `/user/createuser`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Request Body:**
  - `username` (string): User's username
  - `password` (string): User's password
  - `userAuthentication` (boolean): True
- **Example Body:**
  ```json
  {
    "username":"akshaymule",
    "userAuthentication":"true",
    "password":"123"
  }

## Task Endpoints

### Create Task
- **Endpoint:** `/task/createtask`
- **Method:** `POST`
- **Description:** Creates a new task.
- **Example Body:**
  ```json
  {
    "userId":"6563688ab744cd721acd5291",
    "title":"Anjali mule",
    "description":"s sdssd sd akshay"
  }

### Delete Task
- **Endpoint:** `/task/deletetask`
- **Method:** `DELETE`
- **Description:** Deletes a task by ID.
- **Example Body:**
  ```json
  {
    "taskId":"65636f2a9a0d45df0746e915"
  }

### Update Task
- **Endpoint:** `/task/updatetask`
- **Method:** `PUT`
- **Description:** Updates a task by ID you can change status only "In Progress"."To Do","Done".
- **Example Body:**
  ```json
  {
    "taskId":"65637853656d616ed3210e82",
    "status":"In Progress"
  }
  

### Get Task
- **Endpoint:** `/task/gettask`
- **Method:** `GET`
- **Description:** Retrieves details of a task by ID.
- **Example Body:**
  ```json
  {
    "taskId": "656372c97759d78b02f2b450"
  }

### Show All Tasks
- **Endpoint:** `/task/showalltask`
- **Method:** `GET`
- **Description:** Retrieves all tasks.
- **Example Body:**
  ```json
  {
   "userId": "6563688ab744cd721acd5291"
  }


### Search Task
- **Endpoint:** `/task/search`
- **Method:** `POST`
- **Description:** Searches for tasks based on specified word and also get limited from db using Pagination.
- **Example Body:**
  ```json
  {
    "query":"vishnukant",
    "pageNumber":"1",
    "pageSize":"2"
  }


## Task Status Endpoints

### Completed Tasks
- **Endpoint:** `/taskstatus/completedtask`
- **Method:** `GET`
- **Description:** Retrieves completed tasks.
- **Example Body:**
  ```json
  {
   "userId": "6563688ab744cd721acd5291"
  }

### Incompleted Tasks
- **Endpoint:** `/taskstatus/incomplete`
- **Method:** `GET`
- **Description:** Retrieves incompleted tasks.
- **Example Body:**
  ```json
  {
   "userId": "6563688ab744cd721acd5291"
  }

### Upcoming Tasks
- **Endpoint:** `/taskstatus/upcommingtask`
- **Method:** `GET`
- **Description:** Retrieves upcoming tasks.
- **Example Body:**
  ```json
  {
   "userId": "6563688ab744cd721acd5291"
  }

## Analysis Endpoint

### Task Analysis
- **Endpoint:** `/analysis/lastsevenday`
- **Method:** `GET`
- **Description:** Performs analysis on tasks.
- - **Example Body:**
  ```json
  {
   "userId": "6563688ab744cd721acd5291"
  }

## Running the Server
To run the server, execute the following command in your terminal:
```bash
node index.js
