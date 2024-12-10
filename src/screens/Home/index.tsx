import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.topBar}>
                <Image source={require("../../../assets/Logo.png")}  style={styles.logo} ></Image>
            </View>
        </View>
    )
}