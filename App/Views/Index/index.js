import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View
} from 'react-native'

import TabBarComp from '../../Components/TabBar'
import NavbarComp from '../../Components/NavBar'

export default class IndexView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>  
                <NavbarComp route={this.props.route} navigator={this.props.navigator}/> 
                <TabBarComp navigator={this.props.navigator}/>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})
