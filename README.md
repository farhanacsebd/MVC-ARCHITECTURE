## MVC ARCHITECTURE
### MVC = (Model View Controller)
- Separation of Concerns(SOC)
- It increases codes readability and scalability(reuse code)

----
## Without MVC ARCHITECTURE, FULL CODE:
```javascript
const express = require('express');

const app = express();
const PORT = 3000;

// without body-parser
app.use(express.urlencoded({extended: true}));

const users =[
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
    <form method="POST" action="/users">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="number" name="age" placeholder="Enter your age" />
        <button type="submit">Save Data</button>
    </form>
`;


app.get('/users', (req, res) => {
    res.send(htmlForm);
});

app.post('/users', (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name, 
        age
    };
    users.push(user);
    res.status(201).json({
        success: true,
        users
    })
});

app.use((req,res,next)=>{
    res.status(404).json({
        message: "oh no, resource not found.",
    })
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```