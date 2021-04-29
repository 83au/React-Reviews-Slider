import React from "react";
import Review from "./Review";
import reviews from "./reviews";

function Slider() {
  const slides = reviews.map(review => <Review key={review.id} {...review} />);
  return (
    <section className="Slider">
      <ul className="Slides">{slides}</ul>
    </section>
  );
}

export default Slider;
