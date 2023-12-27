import { Touchable, TouchableOpacity, View, Text } from "react-native";
import {Entypo, Ionicons} from '@expo/vector-icons';
import {styles} from './style'
import { useState } from "react";

interface TaskProps{
  text: string,
  deleteTask: (taskName:string) => void,
  amountOfFinished : (taskName:string, disable: boolean) => void
}

export function Task({text, deleteTask, amountOfFinished} : TaskProps){

  const [finished, setfinished] = useState(false)

  function handlePressFinishedTask(){
    if(finished){
      amountOfFinished(text, true)
      setfinished(false)
    }else{
      setfinished(true)
      amountOfFinished(text, false)
      
    }
  }

  function handleDeleteTask(){
    deleteTask(text)
  }

  return(
    <View style={styles.taskModel}>
      <TouchableOpacity onPress={handlePressFinishedTask}>
        {
          (!finished) ? <Entypo name="circle" size={24} color="#4EA8DE" /> : <Ionicons name="checkmark-circle" size={24} color="#5E60CE"/>
        }
        
      </TouchableOpacity>

      {
        (!finished) ? <Text style={styles.TaskMessage}>{text}</Text> : <Text style={styles.TaskMessageFinished}>{text}</Text>
      }


      <TouchableOpacity onPress={handleDeleteTask}>
        <Ionicons name="md-trash-outline" size={24} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}