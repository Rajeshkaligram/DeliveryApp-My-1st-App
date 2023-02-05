import React, { useState } from 'react';

import {
    Button,
    onPress,
    Linking,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const App = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // use state for date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        console.warn(date.tostring());
        hideDatePicker();
    };

    // use state for from
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');

    const [display, setDisplay] = useState(false);

    return (
        <SafeAreaView style={styles.body}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView style={styles.container1}>
                <View style={backgroundStyle}>
                    <View style={styles.from}>
                        <Text style={styles.name}>Full Name:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Full name....."
                            onChangeText={text => setName(text)}
                            Value={name}
                        />
                    </View>

                    <View style={styles.from}>
                        <Text style={styles.name}>Email id:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email id....."
                            onChangeText={text => setEmail(text)}
                            Value={email}
                        />
                    </View>

                    <View style={styles.from}>
                        <Text style={styles.name}>password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password..."
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                            Value={password}
                        />
                    </View>

                    {/* use date picker */}
                    <View style={styles.button}>
                        <Button
                            title="Date Of Birth"
                            onPress={showDatePicker}
                            onChangeText={text => setDate(text)}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View>
                        {date ? (
                            <View>
                                <Text>DOB:{date}</Text>
                            </View>
                        ) : null}
                    </View>

                    {/* submit button */}
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => {
                                setDisplay(true);
                            }}>
                            <Text>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => navigation.navigate('Leave Approvals')}>
                            <Text>Main Page</Text>
                        </TouchableOpacity>
                    </View>

                    {/* display my data */}
                    <View>
                        {display ? (
                            <View>
                                <Text>Name is :{name}</Text>
                                <Text>Email is :{email}</Text>
                                <Text>Password is :{password}</Text>
                                <Text>DOB is:{date}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Text>Next Page</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        margin: 0,
        marginTop: 60,
    },
    input: {
        height: 25,
        borderWidth: 1,
        borderColor: '#AA8A51',
        borderRadius: 2,
    },
    container1: {
        margin: 0,
    },
    from: {
        margin: 10,
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EB5332',
        borderRadius: 20,
        height: 30,
        padding: 7,
    },
    name: {
        color: '#355279',
        fontWeight: '600',
    },
    button: {
        paddingRight: 254,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default App;
