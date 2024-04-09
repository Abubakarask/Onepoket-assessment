# Overview
This documentation provides details on the provided tasks in assessment, instructions on how to run the server locally, and examples of requests and responses.

## Usage
1. **Clone the repository**:
```bash
git clone https://github.com/Abubakarask/Onepoket-assessment.git
cd Onepoket-assessment
```

2. **Task-I/config/.env** --> ***define a environment variables file named .env (in config folder) with attributes:***
```
                          - PORT
```

## TaskI --> Basic Node.js Server
### i) Navigate to folder Task-I:
```bash
cd Task-I
```

### ii) Install the required packages by using this command(Make sure you are in folder Task-I):
```
npm i
```

### iii) Run the following command to start the server:
```
node index.js
```

## Endpoints
### 1. GET /

- #### Description: Retrieve response of home route of PORT
- #### Example Request:
```bash
curl http://localhost:3000/
```
- #### Example Response:
```
{
    "success": true,
    "message": "Hello, World!"
}
```

## TaskII -->  Data Manipulation
### i) Navigate to main folder(if you are in some other folder)
```bash
cd Onepoket-assessment
```

### ii) To run the function use:
```bash
node task-ii.js
```

## TaskIII -->  Asynchronous File Handling
### i) Navigate to main folder(if you are in some other folder)
```bash
cd Onepoket-assessment
```

### ii) To run the function use:
```bash
node task-iiI.js
```
