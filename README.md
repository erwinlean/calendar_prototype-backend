## shift_simple_api

Node.js API for booking reservations. It includes a schema for reservations and a set of handlers that allow users to post, get, and delete reservations, as well as get all reservations or reservations for a specific user.
The reservationsSchema file defines a Mongoose schema for reservations, including the name, type, email, cell phone, day, and hour of the reservation.

_________________________________________________________

### API Endpoints:

GET '/':
Description: Returns a JSON response with a message stating that the path is incorrect.
Request parameters: None
Request body: None
Response body:
```
{
"message": "Error, bad path"
}
```

GET '/bookings':
Description: Returns a rendered HTML page with a list of all reservations.
Request parameters: None
Request body: None
Response body: HTML page

POST '/reservations':
Description: Creates a new reservation.
Request parameters: None
Request body:
```
{
"name": "string",
"email": "string",
"type": "string",
"celphone": "string",
"day": "string",
"hour": "number"
}
Response body:
{
"_id": "string",
"name": "string",
"email": "string",
"type": "string",
"celphone": "string",
"day": "string",
"hour": "number",
"__v": "number"
}
```

GET '/reservations':
Description: Returns a JSON response with a list of all reservations, grouped by name.
Request parameters: None
Request body: None
Response body:
```
{
"name": [
{
"day": "string",
"hour": "number",
"type": "string"
},
...
],
...
}
```

GET '/reservations/getUser':
Description: Returns a JSON response with a list of reservations, showing only the name, type, day, and hour fields.
Request parameters: None
Request body: None
Response body:
```
[
{
"name": "string",
"day": "string",
"hour": "number",
"type": "string"
},
...
]
```

DELETE '/reservations/deleteUser/:name':
Description: Deletes all reservations for the given name.
Request parameters: name (string) - The name of the user whose reservations will be deleted.
Request body: None
Response body:
```
{
"message": "Reservation deleted"
}
```

DELETE '/reservations/deleteAll':
Description: Deletes all reservations.
Request parameters: None
Request body: None
Response body:
```
{
"message": "All reservations deleted"
}
```

Note: All endpoints return an error message if an error occurs while processing the request.
