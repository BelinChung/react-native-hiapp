import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import iconfontConf from '../../Utils/iconfontConf'

const navIconfont = {
    reload: 'E603',
    write: 'E604'    
}

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    
    render() {
        return(
            <NavigationBar
                title={{title: 'HiApp', tintColor: 'black'}}
                leftButton={this._renderBarButton('reload')}
                rightButton={this._renderBarButton('write')}
                style={styles.navbar}
                statusBar={{tintColor: '#f7f7f8'}}
            />
        )
    }
    
    _renderBarButton(icon, handler) {
        return (
            <TouchableOpacity style={styles.navBarButton}>
                <View>
                    <Text style={styles.navBarButtonText}>{iconfontConf('uni' + navIconfont[icon])}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#f7f7f8'
    },
    navBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7
    },
    navBarButtonText: {
        fontFamily: 'iconfont',
        fontSize: 26,
        letterSpacing: 0.5,
    }
})