import React from 'react';
import './App.css';
import OrderForm from './OrderForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Lunch Ordering System</h1>
                <OrderForm />
            </header>
        </div>
    );
}

export default App;
