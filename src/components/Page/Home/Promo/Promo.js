import React, { useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import LoadingIcon from "../../../LoadingIcon/LoadingIcon";
import promo1 from "./images/promo1.jpg";
import promo2 from "./images/promo2.jpg";
import promo3 from "./images/promo3.jpg";

let promo = [
  { image: promo1, text: "Promo text 1" },
  { image: promo2, text: "Promo text 2" },
  { image: promo3, text: "Promo text 3" },
];

export default function Promo(props) {
  const [slider, setSlider] = useImmer({
    step: 0,
    isLoading: true,
    promo: [],
  });

  let timeout = useRef();

  useEffect(() => {
    // here should be request to get promo banners from backend
    setSlider((draft) => {
      for (let i = 0; i < 3; i++) draft.promo.push(promo[i]);
      draft.isLoading = false;
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (slider.promo.length) {
      timeout.current = setTimeout(() => {
        changeStep((slider.step + 1) % slider.promo.length);
      }, 2000);
    }
  });

  function changeStep(n) {
    clearTimeout(timeout.current);
    setSlider((draft) => {
      draft.step = n;
    });
  }

  if (slider.isLoading) return <LoadingIcon />;

  return (
    <section className="promo">
      <div className="promo__slide">
        <img src={slider.promo[slider.step].image} alt="promo" />
        <h2 className="promo__title">{slider.promo[slider.step].text}</h2>
      </div>
      <div className="promo__nav">
        {slider.promo.map((image, index) => (
          <div
            className={`promo__slider-step ${index === slider.step ? "promo__slider-step--active" : ""}`}
            onClick={() => changeStep(index)}
            key={index}
          >
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
