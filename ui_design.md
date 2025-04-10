# UI Design for Lunch Ordering System

## Components

### 1. Order Form
- **Input Fields**:
  - **Employee Name**: Text input for the user's name.
  - **Meal Type**: Dropdown selection (options: "Sandwich", "Salad").
  - **Bread Type** (conditional):
    - Dropdown selection (options: "Brown", "White") - only visible if "Sandwich" is selected.
  - **Kind** (conditional):
    - Checkbox or multi-select dropdown (options: "Tuna", "Egg", "Chicken", "BLT") - only visible if "Sandwich" is selected.

### 2. Submit Button
- A button to submit the order.

### 3. Confirmation Message
- A message displayed after successful order submission, showing the order details.

## Layout
- The form should be centered on the page with clear labels for each input field.
- Use responsive design principles to ensure usability on different devices.

## Example UI Flow
1. User opens the order form.
2. User inputs their name.
3. User selects a meal type.
4. If "Sandwich" is selected, additional options for bread type and kind are displayed.
5. User submits the form.
6. Confirmation message is displayed with order details.