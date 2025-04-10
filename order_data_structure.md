# Order Data Structure for Lunch Ordering System

## Order Object
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