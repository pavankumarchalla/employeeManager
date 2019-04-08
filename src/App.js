import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCZcTv0P2HSG6Hv28wLl1aX4FyW3Tat5Gc",
      authDomain: "empolyeemanager.firebaseapp.com",
      databaseURL: "https://empolyeemanager.firebaseio.com",
      projectId: "empolyeemanager",
      storageBucket: "empolyeemanager.appspot.com",
      messagingSenderId: "1083124988637"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>
            Hello!!
          </Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;