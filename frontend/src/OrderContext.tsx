import React, { createContext, useState, ReactNode } from 'react';

interface OrderContextType {
    order: any; // Replace 'any' with a specific type if needed
    setOrder: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with a specific type if needed
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [order, setOrder] = useState<any>(null); // Replace 'any' with a specific type if needed

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};