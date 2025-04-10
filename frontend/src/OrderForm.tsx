import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';



const OrderForm: React.FC = () => {
    const [employeeName, setEmployeeName] = useState<string>('');
    const [mealType, setMealType] = useState<string>('sandwich');
    const [breadType, setBreadType] = useState<string>('brown');
    const [kind, setKind] = useState<string[]>([]);

    // const { order, setOrder } = useContext(OrderContext);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const orderData = {
            employeeName,
            mealType,
            breadType: mealType === 'sandwich' ? breadType : null,
            kind: mealType === 'sandwich' ? kind : []
        };
        console.log('Order submitted:', orderData);
        
        // Send the order to the backend
        event.preventDefault();
        console.log('Order submitted:', orderData);
        
        // Send the order to the backend
        try {
            const response = await fetch('http://localhost:3001/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            if (response.ok) {
                console.log('Order successfully sent to the backend');
            } else {
                console.error('Failed to send order to the backend');
            }
        } catch (error) {
            console.error('Error sending order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
                <TextField
                    label="Employee Name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    required
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Meal Type</InputLabel>
                <Select
                    value={mealType}
                    onChange={(e) => setMealType(e.target.value)}
                    required
                >
                    <MenuItem value="sandwich">Sandwich</MenuItem>
                    <MenuItem value="salad">Salad</MenuItem>
                </Select>
            </FormControl>
            {mealType === 'sandwich' && (
                <>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Bread Type</InputLabel>
                        <Select
                            value={breadType}
                            onChange={(e) => setBreadType(e.target.value)}
                        >
                            <MenuItem value="brown">Brown</MenuItem>
                            <MenuItem value="white">White</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Kind</InputLabel>
                        <Select
                            multiple
                            value={kind}
                            onChange={(e: SelectChangeEvent<string[]>) => setKind([...e.target.value as string[]])}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            <MenuItem value="Tuna">Tuna</MenuItem>
                            <MenuItem value="Egg">Egg</MenuItem>
                            <MenuItem value="Chicken">Chicken</MenuItem>
                            <MenuItem value="BLT">BLT</MenuItem>
                        </Select>
                    </FormControl>
                </>
            )}
            <Button type="submit" variant="contained" color="primary">Submit Order</Button>
        </form>
    );
};

export default OrderForm;