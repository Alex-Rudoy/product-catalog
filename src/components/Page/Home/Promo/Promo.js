import React, { useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import promo1 from "../../../../images/promo1.jpg";
import promo2 from "../../../../images/promo2.jpg";
import promo3 from "../../../../images/promo3.jpg";

export default function Promo(props) {
  const [slider, setSlider] = useImmer({
    step: 0,
    images: [promo1, promo2, promo3],
    text: ["Promo text 1", "Promo text 2", "Promo text 3"],
  });

  let timeout = useRef();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      changeStep((slider.step + 1) % 3);
    }, 2000);
  }, [slider.step]);

  function changeStep(n) {
    clearTimeout(timeout.current);
    setSlider((draft) => {
      draft.step = n;
    });
  }

  return (
    <section className="promo">
      <div className="promo__slide">
        <img src={slider.images[slider.step]} alt="promo" />
        <h2 className="promo__title">{slider.text[slider.step]}</h2>
      </div>
      <div className="promo__nav">
        {slider.images.map((image, index) => (
          <div
            className={`promo__slider-step ${index === slider.step ? "promo__slider-step--active" : ""}`}
            onClick={() => changeStep(index)}
          >
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
