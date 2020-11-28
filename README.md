# RequestPractise

A simple repository in Node.js to get started with requests.
You have to setup the server on your own machine, although I'm planning to publish this on a server. Made with ♡ by [eta](https://twitter.com/etacph)


# API documentation:

## GET /country
-> Returns country of IP-Address

Example:
```
http://localhost:3000/country
```


## GET /ipAddress
-> Returns IP-Address

Example:
```
http://localhost:3000/ipAddress
```


## GET /queryParams
-> Returns all query params

Example:
```
http://localhost:3000/queryParams?apple=1&banana=3
```
Query params: Anything


## GET /redirect/{URL}
-> Redirects to given URL

Example:
```
http://localhost:3000/redirect/https://twitter.com/etacph
```
URL: Any valid URL


## GET /userAgent
-> Returns request User-Agent

Example:
```
http://localhost:3000/userAgent
```


## POST /formData
-> Returns all form data in payload

Example:
```
http://localhost:3000/formData, body={ "apple": 1, "banana": 3 }
```
Form data: Anything


## POST /json
-> Returns all objects in JSON payload

Example:
```
http://localhost:3000/formData, json={ "apple": 1, "banana": 3 }
```
JSON: Anything