import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native'

import capitalize from 'lodash/capitalize'

import ItemCell from '../../Components/ItemCell'
import Button from 'apsl-react-native-button'
import styleUtils from '../../Styles'

export default class SettingsView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <TouchableHighlight underlayColor='transparent'>
                    <View style={Styles.tweetContainer}>
                        <Image source={{uri: 'http://lorempixel.com/68/68/people/7/'}} style={Styles.avatar} />
                        <View style={Styles.rightContainer}>
                            <View style={Styles.userContainer}>
                                <Text style={Styles.name}>Name: HiApp</Text>
                            </View>
                            <Text style={[Styles.time, Styles.ponit]}>Points: 100</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <ItemCell
                    onPress={this._gotoView.bind(this, 'feedback')}
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.feedbackIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../../assets/feedback.png')}>
                    Feedback
                </ItemCell>
                <ItemCell
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.languageIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../../assets/language.png')}>
                    Language
                </ItemCell>
                <ItemCell
                    onPress={this._gotoView.bind(this, 'about')}
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={itemCellColor.aboutIcon}
                    containerStyle={itemCellColor.container}
                    icon={require('../../assets/about.png')}>
                    About
                </ItemCell>
                <Button style={Styles.logoutButton} textStyle={Styles.logoutButtonFontsize}>
                    Sign Out
                </Button>
            </View>
        )
    }
    
    _gotoView(view) {
        this.props.navigator.push({
            title: capitalize(view),
            id: view
        })    
    }
} 

const itemCellColor = {
    container: styleUtils.itemCell,
    feedbackIcon: {
        backgroundColor: '#38b57f' 
    },
    languageIcon: {
        backgroundColor: '#9b59b6' 
    },
    aboutIcon: {
        backgroundColor: '#5999f3' 
    }
}

const Styles = StyleSheet.create({
    tweetContainer: {
        ...styleUtils.itemCell,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 4,
        paddingBottom: 10
    },
    avatar: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 4
    },
    userContainer: {
        flexDirection: 'row'
    },
    time: {
        marginLeft: 4,
        fontSize: 13,
        color: '#8999a5',
        marginTop: 2
    },
    name: {
        fontWeight: '600',
        fontSize: 15
    },
    rightContainer: {
        flexGrow: 1,
        padding: 10
    },
    ponit: {
        marginLeft: 0    
    },
    logoutButton: {
        backgroundColor: '#ff3b30',
        borderWidth: 0,
        margin: 10,
        marginTop: 20
    },
    logoutButtonFontsize: {
        fontSize: 18,
        color: 'white'
    }
})