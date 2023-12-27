import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskModel: {
    marginTop: 12,
    backgroundColor: '#262626',
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 12,
    paddingEnd: 8,
    paddingStart: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333'
  },
  TaskMessage: {
    flex: 1,
    color: '#F2F2F2',
    textAlign: 'justify'
  },
  TaskMessageFinished: {
    flex: 1,
    color: '#808080',
    textAlign: 'justify',
    textDecorationLine: 'line-through'
  }
})