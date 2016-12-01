import React, { 
    Component  
} from 'react'

import {
    StyleSheet,
    Text
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import IconfontConf from '../../Utils/iconfontConf'
import styleUtils from '../../Styles'

import HomeView from '../../Views/Home' 
import SettingsView from '../../Views/Settings' 
import ContactsView from '../../Views/Contacts' 

const tabIconfont = {
    Home: 'E613',
    Contacts: 'E60D',
    Settings: 'E610',
    HomeSelected: 'E602',
    ContactsSelected: 'E614',
    SettingsSelected: 'E60F'
}

export default class TabBarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Home'
        }
    }
    
    render() {
        return (  
            <TabNavigator hidesTabTouch={true} sceneStyle={styles.sceneStyle}>  
                {this._renderTabItem('Home', <HomeView navigator={this.props.navigator}/>)}  
                {this._renderTabItem('Contacts', <ContactsView navigator={this.props.navigator}/>)}  
                {this._renderTabItem('Settings', <SettingsView navigator={this.props.navigator}/>)} 
            </TabNavigator>  
        )
    }
    
    _renderTabItem(tag, childView) {  
        return (  
            <TabNavigator.Item  
                title={tag}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => this._renderTabItemIcon(tag)}
                renderSelectedIcon={() => this._renderTabItemIcon(tag, true)}
                selected={this.state.selectedTab === tag} 
                onPress={() => this.setState({ selectedTab: tag })}>  
                {childView}  
            </TabNavigator.Item>  
        )
    }
    
    _renderTabItemIcon(tag, selected = false) {
        tag = selected ? tag + 'Selected' : tag
        return (
            <Text style={[styles.tabIcon, selected ? styles.selectedTabIcon : {}]}>{IconfontConf('uni' + tabIconfont[tag])}</Text>
        )    
    }
}

const styles = StyleSheet.create({
    sceneStyle: {
        ...styleUtils.containerBg
    },
    titleStyle: {
        color: '#929292',
        fontSize: 12,
        marginTop: -2
    },
    selectedTitleStyle: {
        color: '#ff9630'
    },
    tabIcon: {  
        fontSize: 28,
        color: '#929292',
        fontFamily: 'iconfont'     
    },
    selectedTabIcon: {
        color: '#ff9630'        
    }  
})