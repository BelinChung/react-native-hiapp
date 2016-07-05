import React, { 
    Component    
} from 'react'

import {
    Navigator,
    Platform,
    View
} from 'react-native'

import NavbarComp from '../NavBar'
import styleUtils from '../../Styles'

import IndexView from '../../Views/Index'
import AboutView from '../../Views/About'
import MessageView from '../../Views/Message'
import TweetView from '../../Views/Tweet'
import FeedbackView from '../../Views/Feedback'
import WebViewView from '../../Views/WebView'
import TweetDetailsView from '../../Views/TweetDetails'
import CommentView from '../../Views/Comment'

export default class NavigatorComp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'indexView', index: 0, id: 'index'}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene} 
                />
            </View>
        )
    }

    _renderScene(route, navigator) {
        switch (route.id) {
        case 'index':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <IndexView navigator={navigator}/>
                </View>
            )
        case 'about':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <AboutView navigator={navigator}/>
                </View>
            )
        case 'message':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <MessageView {...route.params} navigator={navigator}/>
                </View>
            )
        case 'tweet':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <TweetView navigator={navigator} route={route}/>
                </View>
            )
        case 'feedback':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <FeedbackView navigator={navigator} route={route}/>
                </View>
            )
        case 'webview':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <WebViewView {...route.params} navigator={navigator}/>
                </View>
            )
        case 'tweetDetails':
            return (
                <View style={[styles.container, styleUtils.containerShadow]}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <TweetDetailsView {...route.params} navigator={navigator} route={route}/>
                </View>
            )
        case 'comment':
            return (
                <View style={styles.container}>
                    <NavbarComp route={route} navigator={navigator}/>
                    <CommentView navigator={navigator} route={route}/>
                </View>
            )
        default:
            break
        }
    }

    _configureScene(route, routeStack) {
        switch (route.id) {
        case 'tweet':
        case 'webview':
            return Navigator.SceneConfigs.FloatFromBottom
        default:
            return Navigator.SceneConfigs.PushFromRight
        }
    }
} 

const styles = {
    container: {
        flex: 1
    }
}
