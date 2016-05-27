import React, {
  Component,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import IconfontConf from '../../Utils/iconfontConf'

import HomeView from '../../Views/Home' 

const tabIconfont = {
    Home: 'E61A',
    Contacts: 'E606',
    Settings: 'E60D',
    HomeSelected: 'E619',
    ContactsSelected: 'E61B',
    SettingsSelected: 'E60C'
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
            <TabNavigator hidesTabTouch={true}>  
                {this._renderTabItem('Home', <HomeView/>)}  
                {this._renderTabItem('Contacts', this._createChildView('DDD'))}  
                {this._renderTabItem('Settings', this._createChildView('EEEE'))} 
            </TabNavigator>  
        )
    }
    
    _createChildView(tag) {
        return (
            <ScrollView contentContainerStyle={{backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </ScrollView>
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