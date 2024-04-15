
const express = require('express');
const connectToMongo = require("./db/db");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const postRoute = require("./routes/post")
connectToMongo()
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;
 
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 app.use('/api/posts',postRoute)

app.use(bodyParser.json());
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});    