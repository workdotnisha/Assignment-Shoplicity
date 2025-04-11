# Shoplicity: React Shopping Website

A modern e-commerce shopping website built with React and the Fake Store API. This project demonstrates a fully functional shopping experience with user authentication, product browsing, cart management, and checkout functionality.
I
## Features

- **User Authentication**
  - Login with username and password
  - JWT token-based authentication
  - Protected routes for authenticated users

- **Product Management**
  - Browse products with responsive grid layout
  - Filter products by category
  - Search products by name
  - View detailed product information

- **Shopping Cart**
  - Add products to cart with quantity selection
  - Update product quantities
  - Remove items from cart
  - View cart summary with total price
  - Checkout process with confirmation

- **UI/UX**
  - Responsive design (mobile-first approach)
  - Animated transitions and loading states
  - Toast notifications for user feedback
  - Dynamic cart item counter in header

## Tech Stack

- **React** - UI library
- **React Router v6** - Routing and navigation
- **Context API** - State management for cart
- **CSS** - Styling with animations
- **Axios** - API requests
- **Fake Store API** - Backend e-commerce API

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/workdotnisha/Assignment-Shoplicity.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Usage

1. **Login**
   - Use the following test credentials:
     - Username: `mor_2314`
     - Password: `83r5^_`

2. **Browse Products**
   - View all products on the homepage
   - Filter products by category using the dropdown
   - Search for specific products using the search bar

3. **Product Details**
   - Click on a product to view full details
   - Select quantity and add to cart

4. **Cart Management**
   - View cart items by clicking the cart icon
   - Adjust quantities or remove items
   - See the total price of all items
   - Complete purchase with the checkout button

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header/         # Navigation and app header
│   ├── ProductCard/    # Individual product display
│   ├── ProductGrid/    # Grid layout for products
│   ├── CartItem/       # Cart item display
│   └── Toast/          # Notification component
├── pages/              # Application pages
│   ├── Login/          # Authentication page
│   ├── Products/       # Product listing page
│   ├── ProductDetail/  # Single product page
│   └── Cart/           # Shopping cart page
├── context/            # React Context providers
│   └── CartContext.jsx # Cart state management
├── services/           # API and service functions
│   └── api.js          # API requests to Fake Store API
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com) to simulate an e-commerce backend. The API provides:

- User authentication (`/auth/login`)
- Product listings (`/products`)
- Category filtering (`/products/category/:category`)
- Product details (`/products/:id`)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Fake Store API](https://fakestoreapi.com) for providing the backend API
- [React](https://reactjs.org/) for the UI library
- [React Router](https://reactrouter.com/) for navigation
- [Axios](https://axios-http.com/) for API requests