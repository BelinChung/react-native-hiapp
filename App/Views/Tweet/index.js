import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Alert
} from 'react-native'

import styleUtils from '../../Styles'
import NavbarComp from '../../Components/NavBar'
import Editor from '../../Components/Editor'

export default class TweetView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        this.props.route.sendTweet = this.sendTweet.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>  
                <NavbarComp route={this.props.route} navigator={this.props.navigator}/> 
                <Editor
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'What\'s happening'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendTweet() {
        Alert.alert(
            'Sent successfully',
            this.state.text,
            [
                {text: 'OK', onPress: () => this.props.navigator.pop()}
            ]
        )
    }
    
    onChangeText(text) {
        this.setState({    
            text: text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    }
})