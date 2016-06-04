import React, {
    Navigator,
    Component,
    Platform,
    View,
    StatusBar
} from 'react-native'

import renderNavBar from '../NavBar'

import IndexView from '../../Views/Index'
import AboutView from '../../Views/About'
import MessageView from '../../Views/Message'
import TweetView from '../../Views/Tweet'
import FeedbackView from '../../Views/Feedback'
import WebViewView from '../../Views/WebView'

export default class NavigatorComp extends Component {
    render() {
        let style = {
            paddingTop: Platform.OS === 'android' ? 56 : 64
        }
        let statusBarStatus = Platform.OS === 'android'
        return (
            <View style={styles.container}>
                <StatusBar
                    hide={statusBarStatus}
                    barStyle='default'
                />
                <Navigator
                    initialRoute={{name: 'indexView', index: 0, id: 'index'}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene} 
                    navigationBar={renderNavBar()}
                    sceneStyle={style}
                />
            </View>
        )
    }

    _renderScene(route, navigator) {
        switch (route.id) {
        case 'index':
            return (<IndexView navigator={navigator}/>)
        case 'about':
            return (<AboutView navigator={navigator}/>)
        case 'message':
            return (<MessageView {...route.params} navigator={navigator}/>)
        case 'tweet':
            return (<TweetView navigator={navigator} route={route}/>)
        case 'feedback':
            return (<FeedbackView navigator={navigator} route={route}/>)
        case 'webview':
            return (<WebViewView {...route.params} navigator={navigator}/>)
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
