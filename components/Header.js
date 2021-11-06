import React from "react";
import { Text, View, StyleSheet } from 'react-native';
//import { Header } from "react-native/Libraries/NewAppScreen";

function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffb300',
    }
})

export default Header;