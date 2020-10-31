import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  title: {
    fontSize: 22,
  },
  box: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  boxBody: {
    width: '90%',
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});


export default style;