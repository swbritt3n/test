import express from "express"
import dotenv from "dotenv"

import { sql } from "./config/db.js" // this imports "sql" which is a "neon" object (neon is the database company)

//configures the environment variables so they can be accessed later
dotenv.config();
const PORT = process.env.PORT; // example of accessing an environment variable

//creates a express application (express is a WEB FRAMEWORK)
// a web framwork is an Toolkit out of the box that can handle routing (req, res), errror handling, etc. 
const app = express();

//creates the MIDDLEWARE from express
// middleware is the intermediate during the recieve operation (between data sent from database to user)
// app.use() creates middleware
app.use(express.json()) // creates middleware to parse json data, express has built in middleware -> we are accessing it with express.json() 
    // the parsing converts the json data -> req.body.
    // this can be accessed such as req.body.user_id

//creates custom middleware
app.use((req,res,next) => {
    console.log('The method is: ', req.method)
    next() // next is a function that will move on to the next
})


//This verifies the server is working by send text to the localhost server.
// '/' is the url path (localhost/5001'/')
// always take in req, res
// GET REQUEST -> means I want to get data
// res.send('Its working') -> the server will respond to the get response by sending the user 'It's working'
app.get('/', (req, res) => {
    res.send('Its working') // you can check this output at localhost/5001 on safari
})


// it is async because it can take time?
app.post('/api/contact', async (req,res) => {
    try {
        //creates variables based on parsing the json data from the user request
        const {user_id, contact_name, phone_number} = req.body

        // there is missing data -> send error
        if (!user_id || !contact_name || !phone_number) { // for values should check with "=== undefined" to allow 0
            return res.status(400).json({message: 'all fields are required'})
        }

        // POST the data to the database: "await sql"
        // assign the posted data to a variable 'contact'
            // ("RETURNING * " returns all assigned data)
        const contact = await sql`
            INSERT INTO contact(user_id, contact_name, phone_number)
            VALUES (${user_id}, ${contact_name}, ${phone_number})
            RETURNING *
        `
        console.log(contact)
        res.status(201).json(contact[0])
    } catch (error) {
        console.log("Error creating contact", error)
        return res.status(500).json({message: 'Internal error'})
    }

})

// initializes the database
async function initDB() {
    try {
        //trys to create a table in the sql neon database.
        //name of the table: contacts
        //columns listed inside
        //----types: VARCHAR(255) - a string up to 255 characters
        //---------- DECIMAL(10,2) - a decimal value 10 characters, 2 places after decimal
        //---------- DATE NOT NULL DEFAULT CURRENT_DATE - date, the default value is the current date
        await sql `CREATE TABLE IF NOT EXISTS contact(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            contact_name VARCHAR(255) NOT NULL,
            phone_number VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log('Database has initialized successfully')
    } catch (error) {
        console.log('Error initializing database: ', error)
        process.exit(1); // exit code of 1 means failure
    }
}


// calls the initDB() function, THEN it only verifies the server port after the database has been initialized
initDB().then(() => {
    app.listen(PORT, () => {
        console.log('server is up and running. PORT: ', PORT)
    })
})
