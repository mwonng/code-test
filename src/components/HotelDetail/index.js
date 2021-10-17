import { RatingView } from "react-simple-star-rating";
import { printAddress, showCancellationText } from "../../utils/formatter";
import PictureWithRibbon from "./PictureWithRibbon";
import {
  HotelContainer,
  HotelInfo,
  HotelPrice,
  HotelInfoContainer,
  HotelTitle,
  HotelAddress,
  PropertyName,
  CancellationType,
  PriceBig,
  PricingSave,
  PriceText,
} from "./HotelDetail.style";

const BigPriceComponent = ({ currency, amount }) => {
  const showUSD = currency === "AUD";
  return (
    <div>
      {showUSD && <span>$</span>}
      <PriceBig>{amount}</PriceBig>
    </div>
  );
};
const SmalPriceComponent = ({ currency, amount }) => {
  const showUSD = currency === "AUD";
  return (
    <span>
      {showUSD && <span>$</span>}
      {amount}
    </span>
  );
};

const HotelInfoSection = ({ property, offer }) => {
  return (
    <HotelInfo>
      <div>
        <HotelTitle>{property.title}</HotelTitle>
        <RatingView ratingValue={property.rating.ratingValue}>
          {property.rating.ratingType === "self" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 170.96 159.93"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          )}
        </RatingView>
      </div>
      <HotelAddress>{printAddress(property.address)}</HotelAddress>
      <PropertyName>{offer.name}</PropertyName>
      <CancellationType>
        {showCancellationText(offer.cancellationOption.cancellationType)}
      </CancellationType>
    </HotelInfo>
  );
};

const PriceSection = ({ offer }) => {
  return (
    <HotelPrice>
      <PriceText>1 night total ({offer.displayPrice.currency})</PriceText>
      <BigPriceComponent
        currency={offer.displayPrice.currency}
        amount={offer.displayPrice.amount}
      />
      <PricingSave>
        {offer.savings && (
          <span>
            Save
            <SmalPriceComponent
              currency={offer.savings.currency}
              amount={offer.savings.amount}
            />
            ~
          </span>
        )}
      </PricingSave>
    </HotelPrice>
  );
};

function HotelDetail({ data, propertyId }) {
  const { property, offer } = data;
  return (
    <HotelContainer data-testid={propertyId}>
      <PictureWithRibbon
        url={property.previewImage.url}
        alt={property.previewImage.caption}
        ribbonText={offer.promotion.title}
      />
      <HotelInfoContainer>
        <HotelInfoSection property={property} offer={offer} />
        <PriceSection offer={offer} />
      </HotelInfoContainer>
    </HotelContainer>
  );
}

export default HotelDetail;
