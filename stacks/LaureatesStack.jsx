import LaureatesScreen from "../screens/LaureatesScreen";
import LaureatesDetails from "../screens/LaureatesDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function LaureatesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={LaureatesScreen} />
            <Stack.Screen name="Details" component={LaureatesDetails} />
        </Stack.Navigator>
    );
}
