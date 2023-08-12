import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { ListItem } from "@rneui/themed";
import { Text, View, Button } from "react-native";
import PrizeYears from "../screens/PrizeYears";
import PrizesHome from "../screens/PrizesHome";
import PrizeDetails from "../screens/PrizeDetails";

const Stack = createStackNavigator();

export default function PrizesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={PrizesHome} />
            <Stack.Screen name="Choose a Year" component={PrizeYears} />
            <Stack.Screen name="Prize" component={PrizeDetails} />
        </Stack.Navigator>
    );
}
