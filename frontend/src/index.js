import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import { AuthContextProvider } from './context/Authcontext.js'; // Ensure the correct path

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <AuthContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </AuthContextProvider>
    </Provider>
);
