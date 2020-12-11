import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default class CoachmarkContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.message}>
                    <Text style={styles.messageText}>{this.props.message}</Text>
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[
                        '#55C9D3', '#59CECE', '#5DD4C7', '#5FD7C1', '#61DBBE', '#63DDB9', '#66E2B3', '#68E5AF', '#6CECA6', '#6EF0A1'
                    ]}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Got it</Text>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        marginHorizontal: 16,
        backgroundColor: '#FFF',
        paddingVertical: 24,
        paddingHorizontal: 30,
        overflow: 'hidden',
    },
    message: {
        flex: 1,
        marginBottom: 23
    },
    messageText: {
        fontSize: 24,
        lineHeight: 29,
        color: 'rgba(0,0,0,0.9)',
        fontFamily: 'Montserrat-Medium',
        fontWeight: '600',
    },
    button: {
        width: width - 92,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 6,
        zIndex: 1
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 20,
        color: '#ffffff',
        fontFamily: 'Montserrat-Medium',
    }
});
