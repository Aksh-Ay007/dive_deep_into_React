const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <div className="shimmer-card" key={i}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line shimmer-subtitle"></div>
            <div className="shimmer-line shimmer-info"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
