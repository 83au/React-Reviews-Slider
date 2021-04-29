import React from "react";

function Review({ name, review, id }) {
  const initials = name
    .split(" ")
    .map(str => str[0])
    .join("");

  const handleSlide = evt => {
    const currentSlide = evt.target.closest(".Review");
    const direction = evt.target.dataset.button;
    const nextSlide =
      direction === "forward"
        ? currentSlide.nextElementSibling
        : currentSlide.previousElementSibling;
    if (!nextSlide) return;
    const nextSlidePos = nextSlide.dataset.id;
    const slidesContainer = evt.target.closest(".Slides");
    const slideWidth = slidesContainer.getBoundingClientRect().width;
    const amountToMove = slideWidth * (nextSlidePos - 1);
    slidesContainer.style.transform = `translateX(-${amountToMove}px)`;
  };

  return (
    <li className="Review" data-id={id}>
      <div className="Review__avatar">{initials}</div>
      <h2 className="Review__name">{name}</h2>
      <p>{review}</p>
      <div className="Review__buttons">
        <button
          className="Review__button Review__button--back"
          onClick={handleSlide}
          data-button="back"
        >
          Back
        </button>
        <button
          className="Review__button Review__button--forward"
          onClick={handleSlide}
          data-button="forward"
        >
          Forward
        </button>
      </div>
    </li>
  );
}

export default Review;
