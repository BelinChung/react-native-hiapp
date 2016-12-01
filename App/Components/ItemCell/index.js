import React, { 
    Component,
    PropTypes     
} from 'react'

import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    PixelRatio
} from 'react-native'

export default class ItemCell extends Component {
    _renderDisclosureIndicator() {
        if (this.props.showDisclosureIndicator) {
            return (
                <Image source={require('../../assets/angle_right.png')} style={styles.chevron}></Image>
            )
        }
    }
    
    _renderSubText() {
        if(this.props.subText) {
            return (
                <Text style={styles.subText}>{this.props.subText}</Text>
            )
        }
    }

    _renderIcon() {
        if (this.props.icon) {
            return (
                <View style={[this.props.iconStyle, styles.iconContainer]}>
                    <View style={styles.paddingView} />
                    <Image style={styles.icon}
                        source={this.props.icon}
                        resizeMode='cover'
                        />
                    <View style={styles.paddingView} />
                </View>
            )
        }
        return <View style={styles.paddingView} />
    }

    render() {
        let touchableProps = {
            accessible: this.props.accessible,
            delayLongPress: this.props.delayLongPress,
            delayPressIn: this.props.delayPressIn,
            delayPressOut: this.props.delayPressOut,
            onLongPress: this.props.onLongPress,
            onPress: this.props.onPress,
            onPressIn: this.props.onPressIn,
            onPressOut: this.props.onPressOut,
        }
        return (
            <TouchableHighlight {...touchableProps}
                underlayColor='#D9D9D9'
                style={[styles.container, this.props.containerStyle]}>
                <View style={styles.viewContainer}>
                    <View style={styles.leftContainer}>
                        {this._renderIcon() }
                    </View>
                    <View style={this.props.showBottomBorder ? [styles.flex, styles.bottomBorder] : styles.flex}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {this.props.children}
                            </Text>
                            {this._renderSubText()}
                            {this._renderDisclosureIndicator() }
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

ItemCell.propTypes = {
    ...TouchableHighlight.propTypes,
    children: PropTypes.string.isRequired,
    showDisclosureIndicator: PropTypes.bool,
    showBottomBorder: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            uri: PropTypes.string,
        }),
    ]),
    iconStyle: PropTypes.object,
    containerStyle: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    viewContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    leftContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    flex: {
        flexGrow: 1        
    },
    bottomBorder: { // eslint-disable-line
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#C8C7CC',
        borderStyle: 'solid',
    },
    paddingView: {
        width: 15,
        backgroundColor: 'white',
    },
    textContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        flexGrow: 1,
        fontSize: 16,
        alignSelf: 'center',
    },
    subText: {
        marginRight: 5,
        fontSize: 14,        
        color: '#8e8e93' 
    },
    chevron: {
        width: 23,
        height: 23,
        marginRight: 5
    },
    iconContainer: {
        alignItems: 'center',
        width: 30,
        height: 30,
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    icon: {
        width: 24,
        height: 24
    }
})