import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        borderRadius: 10,
        borderColor: '#333333',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    description: {
        flex: 1,
        fontSize: 14,
        color: '#F2F2F2',
        paddingHorizontal: 10
    },
    trash: {
        height: 15,
        width: 12
    }
}) 