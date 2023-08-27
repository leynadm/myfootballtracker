import React from "react";
import "../../styles/carousel.css"
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

interface CardDetail {
  imgUrl: string;
  title: string;
}

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          const cardDetail: CardDetail = cardDetails[detailKey];
          return (
            <CarouselItem
              key={detailKey}
              imgUrl={cardDetail.imgUrl}
              imgTitle={cardDetail.title}
            />
          );
        })}
      </div>
    </div>
  );
}
