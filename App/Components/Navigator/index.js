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
                <IndexView navigator={navigator} route={route}/>
            )
        case 'about':
            return (
                <AboutView navigator={navigator} route={route}/>
            )
        case 'message':
            return (
                <MessageView {...route.params} navigator={navigator} route={route}/>
            )
        case 'tweet':
            return (
                <TweetView navigator={navigator} route={route}/>
            )
        case 'feedback':
            return (
                <FeedbackView navigator={navigator} route={route}/>
            )
        case 'webview':
            return (
                <WebViewView {...route.params} navigator={navigator} route={route}/>
            )
        case 'tweetDetails':
            return (
                <TweetDetailsView {...route.params} navigator={navigator} route={route}/>
            )
        case 'comment':
            return (
                <CommentView navigator={navigator} route={route}/>
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
            return Navigator.SceneConfigs.FloatFromRight
        }
    }
} 

const styles = {
    container: {
        flex: 1
    }
}
