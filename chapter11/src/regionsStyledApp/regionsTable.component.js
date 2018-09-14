/* sssssflow */
/* eslint-disable */

import React, { Component } from "react";
import { Text, View, StatusBar, Button, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation";

// import { store } from "./src/routingApp/store";

const myStyles = StyleSheet.create({
    fullView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bigText: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

const makeSimpleView = text =>
    class extends Component<{}> {
        displayName = `View:${text}`;
        render() {
            return (
                <View style={myStyles.fullView}>
                    <Text style={myStyles.bigText}>{text}</Text>
                </View>
            );
        }
    };

const JumpButton = props => (
    <Button
        onPress={() => this.props.navigation.navigate("Charlie")}
        title="Gotocharlie"
    />
);

const Home = makeSimpleView("Home!");
const Alpha = makeSimpleView("Alpha");
const Bravo = makeSimpleView("Bravo");
const Charlie = makeSimpleView("Charlie");
const Zulu = makeSimpleView("Zulu");
const Help = makeSimpleView("Help");

const LinkJump = props => (
    <View style={{ flex: 1 }}>
        <Button
            onPress={() => props.navigation.navigate("Alpha")}
            title="Go to Alpha"
        />
        <Button
            onPress={() => props.navigation.navigate("Bravo")}
            title="Go to Bravo"
        />
        <Button
            onPress={() => props.navigation.navigate("Charlie")}
            title="Go to Charlie"
        />
    </View>
);

const MyDrawer = createDrawerNavigator({
    Home: { screen: Home },
    Alpha: { screen: Alpha },
    Bravo: { screen: Bravo },
    Charlie: { screen: Charlie },
    Zulu: { screen: Zulu },
    Help: { screen: Help },
    LinkJump: { screen: LinkJump }
});

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <StatusBar hidden />
                <Text>Something in the top bar...!</Text>
                <MyDrawer />
            </React.Fragment>
        );
    }
}

export default App;
