import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import LoginPage from './pages/Login/LoginPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import Toast from './components/Toast/Toast';
import './App.css';

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <Router>
      <CartProvider>
        <div className="app">
          {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
          <main className="main-content">
            <Routes>
              <Route path="/login" element={
                isAuthenticated ? <Navigate to="/products" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />
              } />
              <Route path="/products" element={
                isAuthenticated ? <ProductsPage /> : <Navigate to="/login" />
              } />
              <Route path="/product/:id" element={
                isAuthenticated ? <ProductDetailPage showToast={showToast} /> : <Navigate to="/login" />
              } />
              <Route path="/cart" element={
                isAuthenticated ? <CartPage showToast={showToast} /> : <Navigate to="/login" />
              } />
              <Route path="/" element={<Navigate to={isAuthenticated ? "/products" : "/login"} />} />
              <Route path="*" element={<Navigate to={isAuthenticated ? "/products" : "/login"} />} />
            </Routes>
          </main>
          {toastMessage && <Toast message={toastMessage} />}
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;