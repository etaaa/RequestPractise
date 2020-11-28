# RequestPractise by https://twitter.com/etacph

A simple repository to get started with requests.

# API Documentation:

## GET /country
-> Returns country of IP-Address
```
Example:
http://localhost:3000/country
```

## GET /ipAddress
-> Returns IP-Address
```
Example:
http://localhost:3000/ipAddress
```

## GET /queryParams
Query params: Anything
-> Returns all query params
 ```
Example:
http://localhost:3000/queryParams?apple=1&banana=3
```
 
## GET /redirect/{URL}
URL: Any valid URL
-> Redirects to given URL
```
Example:
http://localhost:3000/redirect/https://twitter.com/etacph
```

## GET /userAgent
-> Returns request User-Agent
```
Example:
http://localhost:3000/userAgent
```

## POST /formData
Form data: Anything
-> Returns all form data in payload
```
Example:
http://localhost:3000/formData, body={ "apple": 1, "banana": 3 }
```

## POST /json
JSON: Anything
-> Returns all objects in JSON payload
```
Example:
http://localhost:3000/formData, json={ "apple": 1, "banana": 3 }
```