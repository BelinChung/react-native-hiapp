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
        width: 50, 
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

function _renderBarButton(text, handler, icon = false) {
    let buttonStyle = styles.buttonText 
    if(icon) { 
        text = iconfontConf(text)
        buttonStyle = [styles.buttonText, styles.buttonIconFontText] 
    }
    return (
        <TouchableOpacity
            onPress={handler}
            style={styles.button}>
            <Text style={buttonStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default function renderNavBar() {
    let routeMapper = {
        LeftButton(route, navigator, index, navState) {
            switch (route.id) {
            case 'index':
                return _renderBarButton('uniE603', function(){}, true)
            case 'about':
                return _renderBarButton('Back', () => navigator.pop())
            default:
                break
            }
        },
        RightButton(route, navigator, index, navState) {
            switch (route.id) {
            case 'index':
                return _renderBarButton('uniE604', function(){}, true)
            case 'about':
                return null
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