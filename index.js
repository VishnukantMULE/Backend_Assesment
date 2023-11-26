const bodyParser = require("body-parser");

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
const incompeted=require('./Routes/Task/Managment/IncompletedTask')
const upcomming=require('./Routes/Task/Managment/UpcomingTask')

const analyse=require('./Routes/Analysis/Analysis')


const completedtask =require('./Routes/Task/Managment/CompletedTask')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user',createUser);
app.use('/user',loginUser);


app.use('/task', createTask);
app.use('/task', deleteTask);
app.use('/task', updateTask);
app.use('/task', getTaks);

app.use('/task', showalltask);
app.use('/task', searchtask);

app.use('/taskstatus',completedtask);
app.use('/taskstatus',incompeted);
app.use('/taskstatus',upcomming);


app.use('/analysis',analyse);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
