const express = require('express')
const app = express()


// CONFIGURATIONS
const port = 3000
app.disable('x-powered-by');


// GET ROUTES
const countryRouter = require('./routes/get/country')
const headersRouter = require('./routes/get/headers')
const ipAddressRouter = require('./routes/get/ipAddress')
const queryParamsRouter = require('./routes/get/queryParams')
const redirectRouter = require('./routes/get/redirect')
const userAgentRouter = require('./routes/get/userAgent')


// POST ROUTES
const formDataRouter = require('./routes/post/formData')
const jsonRouter = require('./routes/post/json')


// USE THE ROUTERS
app.use('/country', countryRouter)
app.use('/headers', headersRouter)
app.use('/ipAddress', ipAddressRouter)
app.use('/queryParams', queryParamsRouter)
app.use('/redirect', redirectRouter)
app.use('/userAgent', userAgentRouter)

app.use('/formData', formDataRouter)
app.use('/json', jsonRouter)


// LAUNCH APP
app.listen(port, () => console.log(`Listening on port ${port}!`))