import { StatusBar, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Header } from './components/Header'
import { styles } from './style'
import { useEffect, useState } from 'react'
import { Task } from './components/Task'

interface TaskModel{
  text : string,
  finished: boolean
}


export function Home() {
  const [list, setList] = useState<TaskModel[]>([])
  const [amountOfTasks, setAmountOfTasks] = useState(0)
  const [amountOfFinishedTasks, setAmountOfFinishedTasks] = useState(0)

  const [actualInputValue, setActualInputValue] = useState<string>('')
  useEffect(() => {
    handleUpdateListCount()
  }, [list])

  function updateAmountOfFinishedQuests(taskname: string, disable: boolean){
    
    if(taskname){
      list.find((item) => {
        if(taskname == item.text){
          if(disable && item.finished){
            setAmountOfFinishedTasks((num) => {
              return num-=1
            })
            item.finished = false
          }else if(!disable && !item.finished){
            setAmountOfFinishedTasks((num) => {
              return num+=1
            })
            item.finished = true
          }
        }
      })
    }
  }

  function handleUpdateListCount() {
    setAmountOfTasks((state) => {
      return list.length
    })
  }

  function deleteTask(task: string) {
    Alert.alert('Excluir tarefa', 'Deseja mesmo excluir essa tarefa?', [
      {
        
        text: 'Sim',
        onPress: () => {
          
          const newArr = list.filter((item) => {
            return !(item.text == task)
          })

          
          setList(newArr)
          updateAmountOfFinishedQuests(task, true)
        }
      },
      {
        text: 'Não',
        onPress: () => {

        }
      }
    ])
  }

  function handleClickToAddTask() {

    if (actualInputValue.trim() == '') {
      return Alert.alert('Digite uma mensagem para sua tarefa')
    }
    const searchForInputValueOnActualTasks = list.find((item) => {
      if (item.text == actualInputValue) {
        return true
      }
      return false
    })

    if (searchForInputValueOnActualTasks) return Alert.alert('Já existe uma tarefa com esse nome!')

    setList([...list, {text: actualInputValue, finished: false}])
    setActualInputValue(' ')
  }

  function handleInputChange(text: string) {
    setActualInputValue(text)
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.inputModel}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#808080'}
            value={actualInputValue}
            onChangeText={handleInputChange}
          />

          <TouchableOpacity style={styles.buttonModel} onPress={handleClickToAddTask}>
            <Text style={styles.buttonModelText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.status}>
              <Text style={styles.blue}>Criadas</Text>
              <Text style={styles.counter}>{amountOfTasks}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.purple}>Concluidas</Text>
              <Text style={styles.counter}>{amountOfFinishedTasks}</Text>
            </View>
          </View>
          <View>
            <FlatList
              ListEmptyComponent={
                <Text style={{ color: '#808080', textAlign: 'center', fontWeight: '900', marginTop: 40, lineHeight: 20, fontSize: 16 }}>
                  Você ainda não tem tarefas cadastradas{'\n'}
                  <Text style={{ color: '#808080', textAlign: 'center', fontWeight: '400', fontSize: 14 }}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </Text>}
              data={list}
              renderItem={({ item }) => {
                return <Task text={item.text} deleteTask={deleteTask} amountOfFinished={updateAmountOfFinishedQuests} />
              }}
              keyExtractor={(item) => item.text}
            />
          </View>
        </View>
      </View>
    </>
  )
}