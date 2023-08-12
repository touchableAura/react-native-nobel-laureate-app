import { Text, ScrollView, View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Card } from "@rneui/themed";

function LaureatesDetails({ route }) {
    const [laureateData, setLaureateData] = useState({});

    useEffect(() => {
        fetch(`https://api.nobelprize.org/2.1/laureate/${route.params.id}`)
            .then((res) => res.json())
            .then(([data]) => {
                setLaureateData(data);
            });
    }, []);

    return (
        <ScrollView>
            {laureateData.knownName || laureateData.orgName ? (
                <Card containerStyle={styles.card}>
                    <Card.Title>{laureateData.knownName?.en || laureateData.orgName?.en}</Card.Title>
                    <Card.Divider />
                    {laureateData.founded && <Text>Founded: {laureateData.founded.date}</Text>}
                    {laureateData.birth && (
                        <Text>
                            Born: {laureateData.birth.date}, {laureateData.birth.place.locationString.en}
                        </Text>
                    )}
                    {laureateData.gender && <Text>Gender: {laureateData.gender}</Text>}
                    <Card.Divider />
                    <View style={{ gap: "5px" }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center"}}>Prizes</Text>
                    {laureateData.nobelPrizes.map((prize, i) => (
                        <Text key={i}>
                            Awarded {prize.categoryFullName.en} in {prize.awardYear} &nbsp;
                             {prize.motivation.en}.
                        </Text>
                    ))}
                    
                    </View>
                </Card>
            ) : (
                <ActivityIndicator size="large" marginVertical={8} />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: 
    {
        alignItems: "center",
        jutifyContent: "center",
        marginHorizontal: 16,
        marginVertical: 8,

        marginTop: 15
    }
   
});


export default LaureatesDetails;
