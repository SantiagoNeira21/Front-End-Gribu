import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const goToClass = () => {
        navigation.navigate('Class');
    };

    return (
        <ScrollView contentContainerStyle={styles.MainClassContainer}>
            <Text style={styles.sub}>
                Lecciones recomendadas para hoy
            </Text>
            <TouchableOpacity onPress={goToClass}>
                <Image
                    source={require('../../assets/images/FEEDBACKN.png')}
                    style={styles.Recommendedclass}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                Hola, Nicolás
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    MainClassContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OtherClasses: {
        flex: 1,
    },
    Recommendedclass: {
        width: 360,
        height: 640,
        marginTop: -220
    },
    sub: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: -80,
        marginTop: -300
    },
    title: {
        fontSize: 30,
        marginTop: -180,
        marginLeft: -150
    }
});

export default HomeScreen;
