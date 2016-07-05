import React, { 
    Component,
    PropTypes         
} from 'react'

import {
    WebView,
    StyleSheet,
    View
} from 'react-native'

import styleUtils from '../../Styles'
import NavbarComp from '../../Components/NavBar'

export default class WebViewView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <NavbarComp route={this.props.route} navigator={this.props.navigator}/> 
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />    
            </View>
        )
    }
}

WebViewView.propTypes = {
    url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    }
})