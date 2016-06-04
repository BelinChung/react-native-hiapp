import React, {
  Component,
  WebView,
  PropTypes
} from 'react-native'

export default class WebViewView extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                source={{uri: this.props.url}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate='normal'
                startInLoadingState={true}
                scalesPageToFit={true}
            />    
        )
    }
}

WebViewView.propTypes = {
    url: PropTypes.string.isRequired
}