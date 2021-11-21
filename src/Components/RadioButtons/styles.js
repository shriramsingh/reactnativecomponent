import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  
   
    alignItems:'flex-start',
  },
  outerCircleStyle: {
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    
    backgroundColor: "yellow",
   padding: 5,
   alignItems:'center',
   justifyContent:'center'
    
  },
  innerCircleStyle: {
    backgroundColor: 'red',
    height: 15,
    width: 15,
    borderRadius: 20,
    alignSelf: 'center',
  },
  unCheckedImageStyle: {
      alignItems: 'center',
      justifyContent:'center',
    },
    checkedImageStyle: {
    
    height: 30,
    width: 30,
  },
  unCheckedImageStyle1: {
    height: 30,
    width: 30,
  },
  titleStyle:{
    marginHorizontal:5,
    marginVertical:5
  },
  topTitleStyle: {
    marginVertical:10,
    textAlign:'center'
  }
});
export default styles;
