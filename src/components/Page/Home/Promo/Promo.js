import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import promo1 from "../../../../images/promo1.jpg";
import promo2 from "../../../../images/promo2.jpg";
import promo3 from "../../../../images/promo3.jpg";

export default function Promo(props) {
  const [sliderStep, setSliderStep] = useImmer(0);
  const sliderImages = [promo1, promo2, promo3];
  const sliderText = ["Promo text 1", "Promo text 2", "Promo text 3"];

  console.log(sliderStep);

  useEffect(() => {
    setInterval(() => {
      if (sliderStep == 2) {
        changeStep(0);
      } else {
        changeStep(sliderStep + 1);
      }
    }, 1000);
  }, []);

  function changeStep(n) {
    setSliderStep((draft) => (draft = n));
  }

  return (
    <section className="promo">
      <img src={sliderImages[sliderStep]} alt="promo" />
      <h2>{sliderText[sliderStep]}</h2>
      <div className="promo__nav">
        <div className="promo__slider-step" onClick={() => changeStep(0)}>
          <div></div>
        </div>
        <div className="promo__slider-step" onClick={() => changeStep(1)}>
          <div></div>
        </div>
        <div className="promo__slider-step" onClick={() => changeStep(2)}>
          <div></div>
        </div>
      </div>
    </section>
  );
}
