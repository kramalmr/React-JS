export function card(rackets) {
  return (
    <div className="innerCard">
      <img src={rackets.image} alt={rackets.title} />
      <div className="cardText">
        <h2>{rackets.title}</h2>
        <b>${rackets.price}.00</b>
        <p>{rackets.desc}</p>
      </div>
      <button>
        Add To Cart
      </button>
    </div>
  );
}
