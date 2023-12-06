export const flagRenderFunc = (p: any) => {
  const country = p.value;
  const flagImage = `https://www.countryflags.com/wp-content/uploads/${country.toLowerCase()}-flag-png-large.png`;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={flagImage}
        alt={country}
        style={{ width: "20px", height: "15px", marginRight: "1rem" }}
      />
      {p.value}
    </div>
  );
};

export const starRenderFunc = (p: any) => {
  const stars = [];
  for (let i = 0; i < p.value; i++) {
    stars.push("★");
  }
  return <div style={{ fontWeight: "bold", display: "flex" }}>{stars}</div>;
};

export const balanceRenderFunc = (p: any) => {
  if (p.value) {
    return (
      <div style={{ backgroundColor: p.value > 5000 ? "#e2f9e7" : "#ffcdd2" }}>
        ${p.value}
      </div>
    );
  }
};
