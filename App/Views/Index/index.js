import React, {
  Component,
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import TabBarComp from '../../Components/TabBar'

export default class IndexView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>  
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
