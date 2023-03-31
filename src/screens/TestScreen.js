import { View, Text } from 'react-native';

export default function TestScreen({ name }) {
    return(
        <View>
            <Text>
                hello {name}!
            </Text>
        </View>
    );
}