import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

const Calculator = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const [total, setTotal] = useState(0);

    const [t1, setT] = useState({ total });

    const Sum = (num1, num2) => {
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);

        var total = n1 + n2;
        return setTotal(total);
    };

    const Minus = (num1, num2) => {
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);

        var total = n1 - n2;
        return setTotal(total);
    };

    const Multiply = (num1, num2) => {
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);

        var total = n1 * n2;
        return setTotal(total);
    };

    const Divide = (num1, num2) => {
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);

        var total = n1 / n2;
        return setTotal(total);
    };

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.image}>
                <Image
                    style={styles.Logo1}
                    source={require('../CalculatorLogo/webskitterslogo.png')}
                />
            </View>

            <View style={styles.container2}>
                <View style={styles.heading}>
                    <Text style={styles.name}>CALCULATOR</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Enter Your First Digit"
                                onChangeText={newNumber => setNumber1(newNumber)}
                                value={number1}
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Enter Your Second Digit"
                                onChangeText={newNumber => setNumber2(newNumber)}
                                value={number2}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.allButton}>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Sum(number1, number2)}>
                            <Image
                                style={styles.logo}
                                source={require('../CalculatorLogo/plus.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Minus(number1, number2)}>
                            <Image
                                style={styles.logo}
                                source={require('../CalculatorLogo/minus.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Multiply(number1, number2)}>
                            <Image
                                style={styles.logo}
                                source={require('../CalculatorLogo/multiply.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Divide(number1, number2)}>
                            <Image
                                style={styles.logo}
                                source={require('../CalculatorLogo/divide.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.ans}>
                        <Text style={styles.ansText}>
                            {'Value is ='}
                            {number1} , {number2}
                        </Text>
                    </View>

                    <View style={styles.ans}>
                        <Text style={styles.ansText}>
                            {'Answer is = '}
                            {total}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    image: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 2,
        shadowColor: '#0F0E0F',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    name: {
        fontSize: 26,
        fontWeight: '800',
        margin: 10,
    },
    Logo1: {
        height: 100,
        width: 300,
        marginBottom: 15,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        justifyContent: 'center',
        height: 40,
        borderRadius: 12,
        borderColor: '#121213',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
        width: 150,
        borderStartWidth: 1,
    },
    button: {
        borderColor: '#0F0E0F',
        borderWidth: 4,
        borderRadius: 30,
        margin: 3,
        padding: 3,
    },
    logo: {
        height: 40,
        width: 40,
        padding: 20,
    },
    allButton: {
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        shadowColor: '#0F0E0F',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    ansText: {
        fontSize: 32,
        fontWeight: '600',
        color: '#FBFBFB',
        textAlign: 'center',
    },
    inputText: {
        backgroundColor: '#D3E3F4',
        width: 140,
    },
    ans: {
        margin: 10,
        borderRadius: 14,
        shadowColor: '#A5A9AF',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        padding: 5,
        backgroundColor: '#6DCAF5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    container2: {
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8,
        paddingBottom: 30,
        paddingTop: 10,
    },
});

export default Calculator;
