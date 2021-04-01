import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />

        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Smashed Avo on Toast" />
            <List.Item title="Buttermilk Pancakes" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Chicken Sandwich" />
            <List.Item title="Tofu Salad" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Steak with Fries" />
            <List.Item title="Vegetarian Pizza" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="coffee" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Juice" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
