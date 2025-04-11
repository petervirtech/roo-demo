# Lunch Ordering System Project Brief

## Overview
The Lunch Ordering System is designed for internal use within the company, allowing employees to place lunch orders easily. The system will enable a few users to manage the menu while allowing all employees to place their orders daily.

## Boilerplate Application Description
### Overview
The Lunch Ordering System is a user-friendly application designed to streamline the process of placing lunch orders for employees. The application features a modern interface built using Material Design 3 principles, ensuring a visually appealing and intuitive user experience.

### Key Components

#### 1. Simple Menu
- The application includes a straightforward menu that allows users to easily navigate to different sections, such as:
  - Place an Order
  - View Past Orders
  - Help/Information

#### 2. Company Logo
- The company logo is prominently displayed at the top of the application, reinforcing brand identity and providing a professional appearance.

#### 3. Short Explanation
- A brief description of the application is provided, explaining its purpose and how users can quickly and easily place their lunch orders.

#### 4. Material Design 3
- The application utilizes Material Design 3 principles to create a modern, clean, and user-friendly interface. This includes:
  - Responsive layouts that adapt to different screen sizes.
  - Intuitive navigation that guides users through the ordering process.
  - Visually appealing components that enhance the overall user experience.

### Conclusion
The Lunch Ordering System aims to simplify the lunch ordering process for employees, making it easy to place orders and enjoy their meals without hassle.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd LunchOrderingSystem
   ```
3. Install dependencies:
   ```bash
   # For .NET projects
   dotnet restore
   ```

## Usage
1. Run the application:
   ```bash
   dotnet run
   ```
2. Open your browser and navigate to `http://localhost:5000` to access the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.

## Order Data Structure
The order object will contain the following fields:

- **employeeName**: String - The name of the employee placing the order.
- **mealType**: String - The type of meal selected (e.g., "sandwich" or "salad").
- **breadType**: String (optional) - The type of bread selected (e.g., "brown" or "white"). This field is only applicable if the meal type is "sandwich".
- **kind**: Array of Strings (optional) - The selected kind values for the sandwich. This field is only applicable if the meal type is "sandwich".

## Example Order Object
```json
{
  "employeeName": "John Doe",
  "mealType": "sandwich",
  "breadType": "brown",
  "kind": ["tuna", "egg", "chicken","BLT"]
}
```

## Requirements
- **Order Collection**: Orders will be collected daily at 10:00 AM and sent to an external bakery.
- **User Input**: Users will provide their name, select either a sandwich or salad, choose between brown or white bread (if a sandwich is selected), and select what kind of salad ("Ceasar", "Brie") or what kind of sandwich ( "tuna", "egg", "chicken","BLT")
- **Database**: A simple database will be used to persist order data.
- **No User Authentication**: The system will operate without user authentication for simplicity.

## Components
1. **Frontend**: 
   - A user interface for placing orders.
   - Forms for user input (name, meal type, bread type, toppings).

2. **Backend**: 
   - A server to handle incoming requests.
   - Logic for managing the menu and processing orders.

3. **Database**: 
   - A simple database to store user orders and menu items.

## User Stories and Acceptance Criteria
1. **As an employee**, I want to place a lunch order easily so that I can enjoy my meal without hassle.
   - Acceptance Criteria:
     - The system should allow me to input my name.
     - I should be able to select either a sandwich or salad.
     - If I select a sandwich, I should choose between brown or white bread.
     - I should be able to select toppings for my sandwich.

2. **As a user**, I want to submit my order before the daily cutoff time of 10:00 AM so that my order can be processed and sent to the bakery.
   - Acceptance Criteria:
     - The system should prevent order submissions after 10:00 AM.
     - A confirmation message should be displayed upon successful order submission.

3. **As a menu manager**, I want to manage the menu items so that I can update the available options for employees.
   - Acceptance Criteria:
     - The system should allow me to add, edit, or remove menu items.
     - Changes to the menu should be reflected in the user interface immediately.

4. **As a backend server**, I want to handle incoming requests efficiently so that I can process orders without delays.
   - Acceptance Criteria:
     - The server should accept and process orders from multiple users simultaneously.
     - The server should store order data in the database.

5. **As a database**, I want to persist order data so that it can be retrieved and managed later.
   - Acceptance Criteria:
     - The database should store all user orders and menu items.
     - The data should be retrievable for reporting and analysis.

6. **As a user**, I want to receive a confirmation of my order so that I know it has been successfully placed.
   - Acceptance Criteria:
     - A confirmation message should be displayed after order submission.
     - The confirmation should include the details of my order.

```mermaid
graph TD;
    A[User Interface] -->|Submits Order| B[Backend Server];
    B -->|Stores Order| C[Database];
    B -->|Sends Order| D[External Bakery];

</final_file_content>
