import { render, screen } from "@testing-library/react";
import HotelDetail from "./index.js";

const mockHotel = {
  id: "kwjf8jlxg9",
  property: {
    propertyId: "P107805",
    title: "Metro Hotel Marlow Sydney Central",
    address: ["431-439 Pitt Street", "Sydney"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of Metro Hotel Marlow Sydney Central",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 3.5,
      ratingType: "star",
    },
  },
  offer: {
    promotion: {
      title: "Bonus Points",
      type: "MEMBER",
    },
    name: "Deluxe King",
    displayPrice: {
      amount: 295.0,
      currency: "AUD",
    },
    savings: null,
    cancellationOption: {
      cancellationType: "FREE_CANCELLATION",
    },
  },
};

test("should renders <HotelDetail />", () => {
  render(<HotelDetail data={mockHotel} />);
  const hotelComponent = screen.getByText(/Metro Hotel Marlow Sydney Central/i);
  const address = screen.getByText(/431-439 Pitt Street/i);
  const princeComponent = screen.getByText(/295/i);
  const cancelComponent = screen.getByText(/Free cancellation/i);

  expect(hotelComponent).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(princeComponent).toBeInTheDocument();
  expect(cancelComponent).toBeInTheDocument();
});
