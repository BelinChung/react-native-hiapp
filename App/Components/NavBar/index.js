import React, { 
    Component    
} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import iconfontConf from '../../Utils/iconfontConf'

const styles = {
    navbar: {
        alignItems: 'center',
        borderColor: '#e1e1e1',
        borderBottomWidth: 1    
    },
    title: { 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 5
    },
    titleText: {
        fontSize: 18    
    },
    button: {
        width: 35, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16, 
        color: '#333'
    },
    buttonIconFontText: {
        fontSize: 26, 
        fontFamily: 'iconfont'
    }
}

function _renderBarButton(text, handler, icon = false, buttonStyle = {}, buttonTextStyle = {}) {
    let buttonText = [styles.buttonText, buttonTextStyle] 
    if(icon) { 
        text = iconfontConf(text)
        buttonText = [buttonText, styles.buttonIconFontText] 
    }
    return (
        <TouchableOpacity
            onPress={handler}
            style={[styles.button, buttonStyle]}>
            <Text style={buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default class NavbarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _leftButton() {
        switch (this.props.route.id) {
        case 'index':
            return (<View></View>)
        case 'tweet':
            return _renderBarButton('Cancel', () => this.props.navigator.pop(), false, {
                width: 50,
                marginLeft: 10
            })
        default:
            return _renderBarButton('uniE617', () => this.props.navigator.pop(), true)
        }
    }

    _rightButton() {
        switch (this.props.route.id) {
        case 'index':
            return _renderBarButton('uniE601', () => {
                this.props.navigator.push({
                    title: 'New Tweet',
                    id: 'tweet'
                })    
            }, true, {
                width: 50
            })
        case 'about':
            return (<View></View>)
        case 'tweet':
            return _renderBarButton('Send', this.props.route.sendTweet, false, {
                width: 50,
                marginRight: 7
            })
        case 'feedback':
            return _renderBarButton('uniE603', this.props.route.sendFeedback, true, {
                paddingRight: 5
            })
        case 'tweetDetails':
            return _renderBarButton('uniE60D', this.props.route.comment, true, {
                paddingRight: 5
            })
        case 'comment':
            return _renderBarButton('uniE603', this.props.route.sendComment, true, {
                paddingRight: 5
            })
        default:
            break
        }
    }

    _title() {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{this.props.route.title ? this.props.route.title : 'HiApp'}</Text>
            </View>
        )
    }

    render() {
        let style = {
            paddingTop: Platform.OS === 'android' ? 0 : 20,
            height: Platform.OS === 'android' ? 56 : 64
        }
        return (
            <NavigationBar
                style={[styles.navbar, style]}
                tintColor={'#f7f7f8'}
                statusBar={{
                    hidden: true
                }}
                leftButton={this._leftButton()}
                rightButton={this._rightButton()}
                title={this._title()}
            />
        )
    }
}