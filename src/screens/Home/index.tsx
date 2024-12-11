import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Todo } from "../../models/Todo";
import { ItemTodo } from "../../components/ItemTodo";

export function Home() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [todoDescription, setTodoDescription] = useState('')

    function handleAddTodo() {
        setTodos(prevState => [...prevState, new Todo(todoDescription)])
        setTodoDescription('')
        console.log(todos)
    }

    function handleRemoveTodo(description: string){
        console.log("indice a ser removido : ", description)
        setTodos(prevState => prevState.filter(todo => todo._description !== description))
    }

    function handleCheckTodo(description: string) {
        console.log("Clicou checkbox: ", description)
        setTodos(prevState => prevState.map(todo => {
            if(todo._description == description){
                todo._isCompleted = !todo._isCompleted
            } 
            return todo
        }))  
    }

    function countCompletedTodos(){
        return todos.filter(todo => todo._isCompleted).length
    }

    function countPendingTodos(){
        return todos.filter(todo => !todo._isCompleted).length
    }

    return (
        <View>
            <View style={styles.topBar}>
                <Image source={require("../../../assets/Logo.png")} style={styles.logo} ></Image>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    value={todoDescription}
                    onChangeText={setTodoDescription}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxCount}>
                <View style={styles.boxCount}>
                    <Text style={styles.textBlue}>Criadas</Text>
                    <View style={styles.badge}><Text style={styles.countText}>{countPendingTodos()}</Text></View>

                </View>
                <View style={styles.boxCount}>
                    <Text style={styles.textPurple}>Concluidas</Text>
                    <View style={styles.badge}><Text style={styles.countText}>{countCompletedTodos()}</Text></View>
                </View>

            </View>
            <View style={styles.line}></View>

            <FlatList
                data={todos}
                keyExtractor={(item) => item._description}
                renderItem={({item, index}) => (
                    <ItemTodo key={item._description} todo={item} index={index} onRemove={() => handleRemoveTodo(item._description)} onCheck={()=> handleCheckTodo(item._description)}></ItemTodo>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.listTodosBox}>
                        <Image source={require("../../../assets/clipboard.png")} style={styles.clipboard}></Image>
                        <Text style={styles.primaryEmptyText}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.secondaryEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />

        </View>
    )
}