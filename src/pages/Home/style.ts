import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: .8
  },
  inputsContainer:{
    marginTop: -32,
    marginHorizontal: 24,
    flexDirection: 'row',
    gap: 8
  },
  inputModel: {
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    flex: 1,
    color: '#FFF'
  },
  buttonModel: {
    backgroundColor: '#1E6F9F',
    width: 60,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonModelText: {
    color: '#F2F2F2',
    textAlign: 'center',
    fontSize: 20
  },
  content: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },
  status: {
    flexDirection: 'row',
    gap: 8
  },
  blue: {
    color: '#4EA8DE',
    fontWeight: '900',
  },
  purple: {
    color: '#8284FA',
    fontWeight: '900'
  },
  counter: {
    color: '#fff',
    backgroundColor: '#333',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    borderRadius: 99
  },
})