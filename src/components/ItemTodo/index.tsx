import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";
import { Todo } from "../../models/Todo";

type Props = {
    todo: Todo,
    index: number
    onRemove: () => void
    onCheck: () => void
}

export function ItemTodo(props: Props) {
    console.log("Props: ", props)
    return(
        <View style={styles.container}>
            <ExpoCheckbox
                value={props.todo._isCompleted}
                onValueChange={props.onCheck}
                color={props.todo._isCompleted ? '#5E60CE' : '#4EA8DE'}
            />
            <Text style={styles.description}>{props.todo._description}</Text>
            <TouchableOpacity onPress={props.onRemove}>
                <Image source={require("../../../assets/trash.png")} style={styles.trash}></Image>
            </TouchableOpacity>
        </View>
    )
}