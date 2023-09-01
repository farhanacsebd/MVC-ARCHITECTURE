const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));


const users = [
    {
        name: "Nimki",
        age:20
    },
    {
        name: "Piku",
        age:29
    }
]

const htmlForm = `
<form action="/users" method="POST">
<input type ="text" name ="name" placeholder = "Enter Name" />
<input type ="number" name ="age" placeholder = "Enter age" />
<button type="submit">Save User</button>
</form>
`;

app.get("/users",(req,res) =>{
    res.send(htmlForm)
})

app.post("/users",(req,res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const user = {
        name,
        age
    }
    users.push(user)
    res.status(201).json({
        success: true,
        users,
    })
})

app.use((req,res,next) =>{
    res.status(404).json({
        message: "resource not found",
    })
})

app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})