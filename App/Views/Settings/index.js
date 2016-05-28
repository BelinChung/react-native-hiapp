import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native'

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
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={iconColor.feedbackIcon}
                    icon={require('../../assets/feedback.png')}>
                    Feedback
                </ItemCell>
                <ItemCell
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={iconColor.languageIcon}
                    icon={require('../../assets/language.png')}>
                    Language
                </ItemCell>
                <ItemCell
                    showDisclosureIndicator={true}
                    showBottomBorder={false}
                    iconStyle={iconColor.aboutIcon}
                    icon={require('../../assets/about.png')}>
                    About
                </ItemCell>
                <Button style={Styles.logoutButton} textStyle={Styles.logoutButtonFontsize}>
                    Sign Out
                </Button>
            </View>
        )
    }
} 

const iconColor = {
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

const Styles = StyleSheet.create(Object.assign({},
    styleUtils.card,
    {
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
    }
))