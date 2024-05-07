const express = require('express');
const app = express()
const port = process.env.PORT || 8000;
const studentRoutes = require('./routers/studentrouter')
const sequelize = require('./database')

app.use(express.json())
app.listen(port, () => console.log(`Listening on ${port}`));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//connection
sequelize.sync({ force: false }).then(() => { console.log('All models were synchronized successfully.'); }).catch((err) => { console.log(err) })




// Define routes
app.use(studentRoutes);
