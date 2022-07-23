## API Specs

#### User API

##### `POST /api/user`

Create a new user

Request Body:
```json
{
	"nickname": "",
	"prefrences": [],
	// the mobile device_id if possible
	"device_id": "",
}
```

Response Body:
```json
{
	"public_id": "xdfsdfd",
	"nickname": "",
	"prefrences": [],
}
```

##### `PUT /api/user/{public_id}`

Update a new user profile.

Request Body:
```json
{
	"nickname": "",
	"prefrences": "",
}
```

Response Body:
```json
{
	"public_id": "xdfsdfd",
	"nickname": "",
	"prefrences": "",
}
```

#### Corpration API

##### `POST /api/corpration/login`

Request Body:
```json
{
	"name": "",
}
```

Response Body:
```
```

##### `POST /api/corpration`

Request Body:
```json
{
	"name": "",
}
```

Response Body:
```
```

##### `POST /api/corpration`

Create a new corpration.

Request Body:
```json
{
	"name": "",
}
```

#### Activities API

##### `POST /api/activity`

Create a new activity.

Request Body:
```json
{
	"name": "",
	// persistent: long term activities.
	// temporary: temporary activiteis.
	"type": "",
	// food, sport, outdoor, indoor, entertainment
	"calssify": "",
	// start, end only for temporary
	"start_at": "",
	"end_at": "",
	"geo": {
		lat: 12,
		lng: 12,
	}
}
```

Response Body:
```
```

##### `GET /api/activity`

Filter activities by user prefrences.

Request Body:
```json
[
	{
		"name": "",
		// persistent: long term activities.
		// temporary: temporary activiteis.
		"type": "",
		// food, sport, outdoor, indoor, entertainment
		"calssify": "",
		// start, end only for temporary
		"start_at": "",
		"end_at": "",
		"geo": {
			lat: 12,
			lng: 12,
		}
	}
]
```

Response Body:
```
```
