import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.topBar}>
                <Image source={require("../../../assets/Logo.png")}  style={styles.logo} ></Image>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxCount}>
                <View style={styles.boxCount}>
                    <Text style={styles.textBlue}>Criadas</Text>
                    <View style={styles.badge}><Text style={styles.countText}>0</Text></View>

                </View>
                <View style={styles.boxCount}>
                    <Text style={styles.textPurple}>Concluidas</Text>
                    <View style={styles.badge}><Text  style={styles.countText}>0</Text></View>
                </View>

            </View>
            <View style={styles.line}></View>
        </View>
    )
}