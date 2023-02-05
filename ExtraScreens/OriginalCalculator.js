import { StyleSheet, Text, View, useColorScheme, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

const OriginalCalculator = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={styles.body}>

            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={backgroundStyle}>
                <View style={styles.input_body}>
                    <TextInput
                        style={styles.input_number}
                        multiline={true}
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.main_button}>
                    
                <TouchableOpacity style={{borderWidth:2,}}><Text style={styles.button_text}>AC</Text></TouchableOpacity>
                <TouchableOpacity style={{borderWidth:2,}}><Text style={styles.button_text}>%</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.button_text}>+</Text></TouchableOpacity>
                <TouchableOpacity style={{borderWidth:2,}}><Text style={styles.button_text}>-</Text></TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default OriginalCalculator

const styles = StyleSheet.create({
    body: {
        marginTop: 50,
        flex: 1,
        margin: 15,
    },
    input_body: {
        alignItems: 'flex-end',
        height: 177,
        borderWidth: 2,
    },
    input_number: {
        fontSize: 70,
    },
    main_button:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button_text:{
        fontSize: 40,
        fontWeight: '600',
    },
});