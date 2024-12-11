import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topBar: {
        margin: 30,
        alignItems: 'center',
    },
    logo:{
        height: 47,
        width: 170,
    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: 'space-between'
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
    addButton: {
        backgroundColor: '#1E6F9F',
        width: 60,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 5
    },
    textButton: {
       fontSize: 16,
       color: '#fff',
       textAlign: 'center'
    },
    textPurple: {
        color: '#5E60CE',
        fontWeight: 'bold',
        fontSize: 16
    },
    textBlue : {
        color: '#1E6F9F',
        fontWeight: 'bold',
        fontSize: 16
    },
    badge:{
        backgroundColor: '#262626',
        height: 20,
        width: 25,
        borderRadius: 50,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    countText: {
        fontSize: 12,
        color: '#F2F2F2',
        textAlign: 'center'
    },
    boxCount:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    line:{
        backgroundColor: '#333333',
        height: 2,
        margin: 10
    },
    listTodosBox: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    clipboard:{
        height: 70,
        width: 53,
        margin: 10
    },
    primaryEmptyText: {
        fontWeight: 'bold',
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    },
    secondaryEmptyText:{
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    }
})