interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
}

export default function CarouselItem({ imgUrl, imgTitle }: CarouselItemProps) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle} />
      <div className="carousel-card-title">{imgTitle}</div>
    </div>
  );
}
