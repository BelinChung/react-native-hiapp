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
        fontSize: 26, 
        color: '#333', 
        fontWeight: '400',
        fontFamily: 'iconfont'
    }
}

function _renderBarButton(text, handler, icon = false) {
    if(icon) text = iconfontConf(text)
    return (
        <TouchableOpacity
            onPress={handler}
            style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default function renderNavBar() {
    let routeMapper = {
        LeftButton(route, navigator, index, navState) {
            switch (index) {
            case 0:
                return _renderBarButton('uniE603', function(){}, true)
            default:
                break
            }
        },
        RightButton(route, navigator, index, navState) {
            switch (index) {
            case 0:
                return _renderBarButton('uniE604', function(){}, true)
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