import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RowSection,
  Rating,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Cafe",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/id/1060/700"],
    address = "100 Some Street",
    isOpenNow = true,
    rating = 4,
    isClosed = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RowSection>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${i}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosed && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </RowSection>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
