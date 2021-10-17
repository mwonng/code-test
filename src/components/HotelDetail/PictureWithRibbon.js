import { useState } from "react";
import { HotelPicture, PromotionRibbon } from "./HotelDetail.style";

function PictureWithRibbon({ url, alt, ribbonText }) {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <HotelPicture>
      {ribbonText && !isLoading && (
        <PromotionRibbon>{ribbonText}</PromotionRibbon>
      )}
      <img onLoad={onLoad} src={url} alt={alt} />
    </HotelPicture>
  );
}

export default PictureWithRibbon;
