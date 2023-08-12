import { SafeAreaView, FlatList, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { ListItem } from "@rneui/themed";

export default function LaureatesScreen({ navigation }) {
    const [laureatesData, setLaureatesData] = useState([]);
    const [apiUrl, setApiUrl] = useState("https://api.nobelprize.org/2.1/laureates");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setLaureatesData(data.laureates);
                if (data.links.next) {
                    setApiUrl(data.links.next);
                }
            });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={laureatesData}
                renderItem={({ item }) => (
                    <ListItem
                        bottomDivider
                        onPress={() => {
                            navigation.navigate("Details", { id: item.id });
                        }}>
                        <ListItem.Content>
                            <ListItem.Title>{item.knownName ? item.knownName.en : item.orgName.en}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )}
                keyExtractor={(item) => item.id}
                onEndReached={() => {
                    setIsLoading(true);
                    fetch(apiUrl)
                        .then((res) => res.json())
                        .then((data) => {
                            setLaureatesData((prevLaureatesData) => [...prevLaureatesData, ...data.laureates]);
                            if (data.links.next) {
                                setApiUrl(data.links.next);
                            }
                            setIsLoading(false);
                        });
                }}
                onEndReachedThreshold={0.5}
            />
            {isLoading && <ActivityIndicator size="large" marginVertical={8} />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
})
