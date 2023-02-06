import { SafeAreaView, StatusBar, StyleSheet, Text, View, useColorScheme, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const TitlePage = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    }, []);

    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={styles.body}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ alignItems: 'center' }}>
                <View style={styles.logo_container}>
                    <Image
                        style={styles.logo}
                        source={require('../Image/logocrop.png')}
                    />
                    <View style={styles.name_container}>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>
                            Get Instant Home Delivery
                        </Text>
                    </View>
                </View>
                <View
                    style={[
                        styles.order_text
                    ]}>
                    <Text style={{ color: '#F2A51D', fontWeight: "900", fontSize: 40, }}>ORDER NOW</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default TitlePage;

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#86D8E1',
    },
    logo_container: {
        flex: 0,
        alignItems: 'center',
        marginTop: 100,
    },
    name_container: {
        marginTop: 10,
    },
    order_text: {
        marginTop: 50,
    }
})