import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.topBar}>
                <Image source={require("../../../assets/Logo.png")}  style={styles.logo} ></Image>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}