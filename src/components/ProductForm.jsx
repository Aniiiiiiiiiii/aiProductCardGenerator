import { useState } from "react";

function ProductForm({ onGenerate, loading }) {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !category) return;

    onGenerate(productName, category);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <div className="button-div">
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Details"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;

