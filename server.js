const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// CONFIGURATIONS
app.disable('x-powered-by');
const port = process.env.PORT || 3000


// INVOLVE ROUTES
const formDataRouter = require('./routes/formData')
const homepageRouter = require('./routes/homepage')
const ipAddressRouter = require('./routes/ipAddress')
const jsonRouter = require('./routes/json')
const queryParamsRouter = require('./routes/queryParams')
const userAgentRouter = require('./routes/userAgent')


// USE THE ROUTERS
app.use('/formData', formDataRouter)
app.use('/', homepageRouter)
app.use('/ipAddress', ipAddressRouter)
app.use('/json', jsonRouter)
app.use('/queryParams', queryParamsRouter)
app.use('/userAgent', userAgentRouter)


// LAUNCH APP
app.listen(port, () => console.log(`Listening on port ${port}!`))