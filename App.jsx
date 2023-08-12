import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PrizesStack from "./stacks/PrizesStack";
import LaureatesStack from "./stacks/LaureatesStack";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Prizes" component={PrizesStack} />
                <Tab.Screen name="Laureates" component={LaureatesStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
