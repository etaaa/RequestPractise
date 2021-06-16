# RequestsPractise

A simple repository in node.js to get started with requests and Express.js


## Documentation:

### GET /country
Returns the client's country by IP-Address

Example:
```
http://localhost:3000/country
```


### GET /headers
Returns an object of the sent headers

Example:
```
http://localhost:3000/ipAddress
```


### GET /ipAddress
Returns the client's IP-Address

Example:
```
http://localhost:3000/ipAddress
```


### GET /queryParams
Returns all query params

Example:
```
http://localhost:3000/queryParams?apple=1&banana=3
```
Query params: Anything


### GET /redirect/{URL}
Redirects to given URL

Example:
```
http://localhost:3000/redirect/https://twitter.com/eterdev
```


### GET /userAgent
Returns the client's User-Agent

Example:
```
http://localhost:3000/userAgent
```


### POST /formData
Returns the form data posted to the server

Example:
```
http://localhost:3000/formData, body={ "apple": 1, "banana": 3 }
```


### POST /json
Returns the json data posted to the server

Example:
```
http://localhost:3000/formData, json={ "apple": 1, "banana": 3 }
```