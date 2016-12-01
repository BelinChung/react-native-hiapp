import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import styleUtils from '../../Styles'
import NavbarComp from '../../Components/NavBar'

export default class AboutView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={[styles.container, styleUtils.containerShadow]}>
                <NavbarComp route={this.props.route} navigator={this.props.navigator}/>   
                <View style={styles.textContainer}>
                    <View style={styles.logoView}>
                        <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    </View>  
                    <View style={styles.appNameView}>
                        <Text style={styles.appNameText}>HiApp</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoText}>GitHub: BelinChung</Text>
                        <Text style={styles.infoText}>Email: BelinChung@gmail.com</Text>
                        <Text style={styles.infoText}>Twitter: @BelinChung</Text>
                    </View> 
                    <View style={styles.copyrightView}>
                        <Text style={styles.copyrightText}>Copyright © 2016 BelinChung.</Text>
                    </View> 
                </View> 
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    textContainer: {
        ...styleUtils.containerBg,
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: 35
    },
    logoView: {
        width: 90,
        height: 90,
        borderColor: '#dfdfdf',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center'        
    },
    logo: {
        width: 75,
        height: 75,
        alignSelf: 'center'
    },
    appNameView: {
        marginTop: 15,
    },
    appNameText: {
        fontSize: 20,
        color: '#666'    
    },
    infoView: {
        marginTop: 30
    },
    infoText: {
        marginTop: 10,
        color: '#666'    
    },
    copyrightView: {
        position: 'absolute',
        bottom: 25,
        left: 0, 
        right: 0
    },
    copyrightText: {
        color: '#666',
        alignSelf: 'center'
    }
})