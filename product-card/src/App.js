import './App.css';
import products from './assignment';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      {
        products.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))
      }
    </div>
  );
}

export default App;
