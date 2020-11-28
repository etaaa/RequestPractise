const express = require('express')
const app = express()


// INVOLVE ROUTES
const homepageRouter = require('./routes/homepage')
const ip_addressRouter = require('./routes/ip_address')
const user_agentRouter = require('./routes/user_agent')


// USE THE ROUTERS
app.use('/', homepageRouter)
app.use('/ip_address', ip_addressRouter)
app.use('/user_agent', user_agentRouter)


// CONFIGURATIONS
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.disable('x-powered-by');
const port = process.env.PORT || 3000


// LAUNCH APP
app.listen(port, () => console.log(`Listening on port ${port}!`))