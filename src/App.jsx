import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductCard from "./components/ProductCard";
import { generateProductDetails } from "./services/aiservice";
import "./App.css";

function App() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (productName, category) => {
    setLoading(true);
    setError("");
    setProductData(null);

    try {
      const result = await generateProductDetails(productName, category);
      setProductData(result);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    } 
  };

  return (
    <div className="app">
      <h1>AI Product Card Generator</h1>

      <ProductForm onGenerate={handleGenerate} loading={loading} />

      {error && <p className="error">{error}</p>}

      <ProductCard data={productData} />
    </div>
  );
}

export default App;
