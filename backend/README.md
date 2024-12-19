# Backend for SMS Messaging Application

This backend application handles SMS messaging using Africa's Talking API. It provides an endpoint to send SMS messages and manages responses and errors effectively.

## Features

- Accepts to and message fields in a POST request.

- Uses Africa's Talking API to send SMS messages.

- Implements environment variable configuration for API credentials.

## Technologies Used

- Node.js for the server runtime.

- Express.js for building the API.

- Africa's Talking API for sending SMS.

- dotenv for environment variable management.

## Prerequisites

- Africa's Talking account with valid API credentials.

- Node.js and npm installed on your system.

- Postman or a similar tool for testing the API.

## Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/Caleb-ne1/africas-talking-sms.git
cd backend
```

2. Install Dependencies

  ```bash
  npm install
  ```

3. Configure Environment Variables

Create a .env file in the root directory and add your Africa's Talking credentials:
```bash
AT_API_KEY=your_africas_talking_api_key
AT_USERNAME=your_africas_talking_app_username
```

4. Start the Server
```bash
node server.js
```
The server will run on http://localhost:3004 by default.

## API Documentation

Endpoint: Send SMS

URL: /send

Method: POST

Content-Type: application/json

Request Body

```bash
{
  "to": "+254123456789",
  "message": "Hello, this is a test message!"
}
```

Response

Success (200):

```bash
{
    "data": {
        "SMSMessageData": {
            "Message": "Sent to 1/1 Total Cost: KES 0.8000",
            "Recipients": [
                {
                    "cost": "KES 0.8000",
                    "messageId": "ATXid_263022d5954c5c2a7adb3a80e34e6ed2",
                    "messageParts": 1,
                    "number": "+254123456789",
                    "status": "Success",
                    "statusCode": 101
                }
            ]
        }
    }
}
```

