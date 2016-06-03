import React, {
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native'

import iconfontConf from '../../Utils/iconfontConf'

const styles = {
    navbar: {
        alignItems: 'center',
        backgroundColor: '#f7f7f8',
        shadowOffset: {
            width: 1,
            height: 0.5,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.2,
    },
    title: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18    
    },
    button: {
        flex: 1, 
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

export default function renderNavBar() {
    let routeMapper = {
        LeftButton(route, navigator, index, navState) {
            switch (route.id) {
            case 'index':
                return null
            case 'tweet':
                return _renderBarButton('Cancel', () => navigator.pop(), false, {
                    width: 50,
                    marginLeft: 10
                })
            default:
                return _renderBarButton('uniE617', () => navigator.pop(), true)
            }
        },
        RightButton(route, navigator, index, navState) {
            switch (route.id) {
            case 'index':
                return _renderBarButton('uniE601', () => {
                    navigator.push({
                        title: 'New Tweet',
                        id: 'tweet'
                    })    
                }, true, {
                    width: 50
                })
            case 'about':
                return null
            case 'tweet':
                return _renderBarButton('Send', route.sendTweet, false, {
                    width: 50,
                    marginRight: 7
                })
            case 'feedback':
                return _renderBarButton('uniE603', route.sendFeedback, true, {
                    paddingRight: 5
                })
            default:
                break
            }
        },
        Title(route, navigator, index, navState) {
            return (
                <View style={styles.title}>
                    <Text style={styles.titleText}>{route.title ? route.title : 'HiApp'}</Text>
                </View>
            )
        }
    }
    
    return (
        <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={routeMapper}
        />
    )
}