# Memory Bank for the Lunch Ordering System

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