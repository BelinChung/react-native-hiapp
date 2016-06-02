import React, {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    PropTypes,
    StyleSheet,
    Component
} from 'react-native'

import iconfontConf from '../../Utils/iconfontConf'

export default class EditorComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <View>
                <TextInput
                    placeholder={'What\'s happening'}
                    multiline={true}
                    style={styles.textInput}
                    value={this.props.text}
                    onChangeText={this.props.onChangeText}
                />
                <View style={styles.toolbar}>
                    <TouchableHighlight style={styles.tool}>
                        <Text style={styles.toolText}>{iconfontConf('uniE611')}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tool}>
                        <Text style={styles.toolText}>{iconfontConf('uniE609')}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tool}>
                        <Text style={styles.toolText}>{iconfontConf('uniE607')}</Text>
                    </TouchableHighlight> 
                    <TouchableHighlight style={styles.tool}>
                        <Text style={styles.toolText}>{iconfontConf('uniE61A')}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.tool}>
                        <Text style={styles.toolText}>{iconfontConf('uniE61B')}</Text>
                    </TouchableHighlight>    
                </View>
            </View>
        )   
    }      
}

EditorComp.propTypes = {
    text: PropTypes.string,
    onChangeText: PropTypes.func
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        height: 160,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14    
    },
    toolbar: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#dadada',
    },
    tool: {
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    toolText: {
        fontSize: 22, 
        fontFamily: 'iconfont',
        color: '#666'        
    }
})