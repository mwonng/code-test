import styled from "styled-components";

export const HotelContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media only screen and (max-width: 376px) {
    margin-top: 20px;
  }
`;

export const HotelPicture = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  min-width: 145px;

  & > img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 376px) {
    margin: auto;
  }
`;

export const HotelInfo = styled.div`
  position: relative;
`;

export const HotelPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-around;

  @media only screen and (max-width: 376px) {
    flex-grow: 1;
    text-align: center;
    margin: auto;
  }
`;

export const PromotionRibbon = styled.span`
  position: absolute;
  top: 15px;
  left: 0px;
  background-color: white;
  font-weight: bold;
  color: red;
  padding: 0.2rem 0.5rem;
`;

export const HotelInfoContainer = styled.div`
  display: inline-flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #ccc;
  @media only screen and (max-width: 376px) {
    border-top: unset;
    border-bottom: 1px solid #ccc;
  }
`;

export const HotelTitle = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
`;

export const HotelAddress = styled.div`
  font-size: 0.8rem;
  color: #666666;
`;
export const PropertyName = styled.div`
  color: red;
  text-decoration: underline;
`;
export const CancellationType = styled.div`
  position: absolute;
  font-weight: 600;
  bottom: 10px;
  color: darkgreen;

  @media only screen and (max-width: 376px) {
    bottom: 10px;
    right: 0px;
  }
`;

export const PriceBig = styled.span`
  font-size: 1.8rem;
`;

export const PricingSave = styled.span`
  color: red;
  font-weight: 600;
  padding-bottom: 10px;
  height: 2rem;
`;

export const PriceText = styled.div`
  font-size: 0.8rem;
`;
