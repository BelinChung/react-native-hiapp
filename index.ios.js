import React, {
  Component,
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import NavBarComp from './App/Components/NavBar'
import TabBarComp from './App/Components/TabBar'

class HiApp extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>  
                <NavBarComp /> 
                <TabBarComp />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

AppRegistry.registerComponent('RN_HiApp', () => HiApp)
