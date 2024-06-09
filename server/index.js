const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/connectDB')

// aafai le vanako files haru


//config dot env files
dotenv.config();


// database call
connectDB();

// rest object
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
// user routes
app.use("/api/v1/users", require('./routes/userRoute'))
// transaction routes
app.use('/api/v1/transactions', require('./routes/transcationRoutes'))

app.get('/', (req, res) => {
    res.send("Welcome to Node Api Server")
});

app.get('/config', (req, res) => {
    res.json({
        BASE_URL: process.env.BASE_SERVER_URL,
    });
})

const PORT = 8086 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Status Running Port ${PORT}`.bgCyan)
}
)
