import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './react-crud/store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
</React.StrictMode>

);
