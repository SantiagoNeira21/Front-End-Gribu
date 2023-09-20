import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>{props.id}</StyledText>
        <StyledText color='secondary'>Clase: {props.Nombre_Clase}</StyledText>
        <StyledText>Descripción: {props.descripción}</StyledText>
        <StyledText>Duración: {props.Duración}</StyledText>
        <Text>
            UWUWWUUWUWUUWUWUUWUWUUWUWUWUUWUWUUWUWUWUUWUWUWUWUUWUWUWUWUUWWUWUWUUWUWUW
            UWUUWUWUUWUWUUWUUWUWUUWUWUUWUWUUWUUWUWUUWUUWUWUUWUWUUWUUWUUWWUWUWUWWUWUWUW
            UWUWWUUWUWUUWUWUUWUWUUWUWUWUUWUWUUWUWUWUUWUWUWUWUUWUWUWUWUUWWUWUWUUWUWUW
            UWUUWUWUUWUWUUWUUWUWUUWUWUUWUWUUWUUWUWUUWUUWUWUUWUWUUWUUWUUWWUWUWUWWUWUWUW
            UWUWWUUWUWUUWUWUUWUWUUWUWUWUUWUWUUWUWUWUUWUWUWUWUUWUWUWUWUUWWUWUWUUWUWUW
            UWUUWUWUUWUWUUWUUWUWUUWUWUUWUWUUWUUWUWUUWUUWUWUUWUWUUWUUWUUWWUWUWUWWUWUWUW
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})

export default RepositoryItem