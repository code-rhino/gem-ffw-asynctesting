[Video](https://vimeo.com/911604345?share=copy)

### Step 1: Understanding the API and Data Structure
- The application is designed to fetch data from the "Cat Facts" API.
- The data received is an array of JSON objects containing facts about cats, with attributes such as status (indicating if the fact is verified), ID, user, and the actual text of the fact.

### Step 2: Setting Up Axios for API Calls
- Axios, a promise-based HTTP client for the browser and node.js, is used to make GET requests to the Cat Facts API.
- The function `fetchVerifiedCatFacts` makes a GET request to the API URL and filters the response to return only the facts where the status is verified.

### Step 3: Building the Application
- The application aims to display random verified cat facts, potentially as a widget or part of a dashboard.
- The primary focus is on utilizing the text of the verified facts from the API's response.

### Step 4: Error Handling
- In case the API request fails (e.g., due to a wrong URL or network issues), the application catches the error and logs an error message to the console to prevent the application from failing silently.

### Step 5: Setting Up Jest for Unit Testing
- Jest is used for writing unit tests to ensure the application behaves as expected under various conditions.
- Tests are organized in a separate directory, typically named `test`, and the file for testing our function is called `catFacts.test.js`.

### Step 6: Writing Tests
1. **Mocking Axios Calls**: To avoid making actual HTTP requests in tests, Axios is mocked using Jest's `jest.mock('axios')`.
2. **Testing the GET Request**: A test is written to ensure that the application makes a GET request to the correct API URL.
3. **Testing Verified Facts Filtering**: Another test checks that only verified facts are returned by the function, using mock data that includes both verified and unverified facts.
4. **Testing Error Handling**: A test verifies that an appropriate error message is logged if the API request fails, using Jest to mock a rejected promise for the Axios get request.

### Step 7: Running Tests
- Tests are executed using the `npm test` command, which runs Jest and reports on the tests' outcomes, ensuring that the application correctly handles successful API responses, correctly filters for verified facts, and properly handles errors.

This guide outlines the development and testing process for a JavaScript application that fetches and displays verified cat facts, highlighting the use of Axios for API requests and Jest for unit testing to ensure reliability and correct behavior.