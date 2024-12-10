import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topBar: {
        padding: 30,
        alignItems: 'center',
    },
    logo:{
        height: 47,
        width: 170,
    },
    input: {
        flex: 1,
        color: '#D9D9D9',
        backgroundColor: '#333333',
        borderRadius: 5,
        padding: 20,
        fontSize: 16,
        margin: 5
    },
    container: {
        width: '100%',
        flexDirection: "row"
    },
    addButton: {
        backgroundColor: '#1E6F9F',
        width: 50,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 5
    },
    textButton: {
       fontSize: 16,
       color: '#fff',
       textAlign: 'center'
   }
})