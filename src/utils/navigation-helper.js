/* eslint-disable */
import { StackNavigator } from 'react-navigation';

//componentToScreen :: =>  (a -> b)
// const componentToScreen = component => ({
//   screen: component,
//   navigationOptions: {
//     header: null,
//   },
// });


const componentToScreen = (argOne, argTwo) => {
  //if arg one is function i.e component then
  if(argOne.constructor.name === 'Function') {
    return {
      screen: argOne,
      navigationOptions: {
        header: null, 
      }
    }
  } else if (argOne.constructor.name === 'Object') {

    //that meand we have to return the fucntion that returnn the argone as the navigation optiosns
    return ( argTwo => {
      //here argTwo is the component
      return {
        screen: argTwo,
        navigationOptions: argOne,
      }
    })
  }
}


//toStackNavigator:: => [a] -> (a -> b) -> [b]
const toStackNavigator = components =>
  toScreen =>
    StackNavigator(components.reduce((acc, component) =>
      component.constructor.name === 'Function' ? ({ ...acc, [component.name]: toScreen(component) }) : 
      ({...acc, [component[0].name]: component[1](component[0])})
      
      , {}), {initialRouteName: 'LoginScreen'});

export {
  toStackNavigator,
  componentToScreen,
};

