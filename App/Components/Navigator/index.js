import React, {
    View,
    Navigator,
    Component,
    Platform
} from 'react-native'

import IndexView from '../../Views/Index'
import renderNavBar from '../NavBar'

export default class NavigatorComp extends Component {
    render() {
        let style = {
            paddingTop: 64
        }
        return (
            <Navigator
                initialRoute={{name: 'indexView', index: 0}}
                configureScene={this._configureScene}
                renderScene={this._renderScene} 
                navigationBar={renderNavBar()}
                sceneStyle={style}
                />
        )
    }

    _renderScene(route, navigator) {
        let name = route.name
        switch (name) {
        case 'indexView':
            return (<IndexView/>)
        default:
            break
        }
    }

    _configureScene(route, routeStack) {
        return Navigator.SceneConfigs.VerticalDownSwipeJump
    }
} 
