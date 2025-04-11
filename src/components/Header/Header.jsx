import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

function Header({ setIsAuthenticated }) {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/products" className="logo">
        Shoplicity
        </Link>
        <nav className="nav">
          <Link to="/products" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;