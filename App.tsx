import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, Button, Alert
} from 'react-native';

export default function App() {

    const handleTextPress = () => console.log('Text pressed');
    const handleImagePress = () => console.log('Image pressed');
    const handleButtonPress = () => {
        Alert.alert(
            'Hi there',
            'This is an alert',
            [
                {text: 'Yes', onPress: () => console.log('Yes')},
                {text: 'No', onPress: () => console.log('No')}
            ],
            {cancelable: true});
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={2} onPress={handleTextPress}>Hello Hello Morning Ball</Text>
            <TouchableHighlight onPress={handleImagePress}>
                <Image
                    fadeDuration={1000}
                    source={{
                        width: 200,
                        uri: 'https://picsum.photos/200/300',
                        height: 300,
                    }}
                />
            </TouchableHighlight>
            <Button color={"orange"} title={'Click Me'} onPress={handleButtonPress}/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
