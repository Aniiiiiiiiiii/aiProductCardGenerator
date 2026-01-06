function ProductCard({ data }) {
  if (!data) return null;

  return (
    <div className="product-card">
      <h2>{data.title}</h2>
      <p>{data.shortDescription}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
