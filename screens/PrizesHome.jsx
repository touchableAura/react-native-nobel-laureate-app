import { ListItem } from "@rneui/themed";

export default function PrizesHome({ navigation }) {
    return (
        <>
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Physics", shortName: "phy" } })}>
                <ListItem.Content>
                    <ListItem.Title>Physics</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Chemistry", shortName: "che" } })}>
                <ListItem.Content>
                    <ListItem.Title>Chemistry</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Literature", shortName: "lit" } })}>
                <ListItem.Content>
                    <ListItem.Title>Literature</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Peace", shortName: "pea" } })}>
                <ListItem.Content>
                    <ListItem.Title>Peace</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Physiology or Medicine", shortName: "med" } })}>
                <ListItem.Content>
                    <ListItem.Title>Medicine</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            
            <ListItem onPress={() => navigation.navigate("Choose a Year", { category: { fullName: "Economic sciences", shortName: "eco" } })}>
                <ListItem.Content>
                    <ListItem.Title>Economic Sciences</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron /> 
            </ListItem>
        </>
    );
}
