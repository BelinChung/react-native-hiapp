import React, {
  Component,
  StyleSheet,
  View
} from 'react-native'

import styleUtils from '../../Styles'

export default class MessageView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>  
                
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    }
})