import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View
} from 'react-native'

import PhotoBrowser from 'react-native-photo-browser'

export default class FeedbackView extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>  
                <PhotoBrowser
                    onBack={this.props.navigator.pop}
                    mediaList={this.props.mediaList}
                    enableGrid={false}
                    useCircleProgress
                />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})