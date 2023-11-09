const db = require('./Config/ConnectDB'); 
const express = require('express');
const createUser= require('./Routes/User/CreateUser')
const loginUser=require('./Routes/User/accessuser')
const createTask=require('./Routes/Task/CRUD/CreateTask')
const deleteTask=require('./Routes/Task/CRUD/DeleteTask')
const getTaks=require('./Routes/Task/CRUD/GetTask')
const updateTask=require('./Routes/Task/CRUD/UpdateTask')
const showalltask=require('./Routes/Task/Access/AllTask')
const searchtask=require('./Routes/Task/Access/SearchTask')

const completedtask =require('./Routes/Task/Managment/CompletedTask')
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user',createUser);
app.use('/user',loginUser);


app.use('/task', createTask);
app.use('/task', deleteTask);
app.use('/task', updateTask);
app.use('/task', getTaks);

app.use('/task', showalltask);
app.use('/task',completedtask);
app.use('/', searchtask);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
