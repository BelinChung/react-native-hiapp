import React, {
    View,
    Text,
    Image,
    TouchableHighlight,
    PropTypes,
    StyleSheet,
    PixelRatio,
    Component
} from 'react-native'

import styleUtils from '../../Styles'

export default class ItemCell extends Component {
    _renderDisclosureIndicator() {
        if (this.props.showDisclosureIndicator) {
            return <Image source={require('../../assets/angle_right.png')} style={styles.chevron}></Image>
        }
    }

    _renderIcon() {
        if (this.props.icon) {
            return (
                <View style={[this.props.iconStyle, styles.iconContainer]}>
                    <View style={styles.paddingView} />
                    <Image style={[styles.icon]}
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
                style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.leftContainer}>
                        {this._renderIcon() }
                    </View>
                    <View style={this.props.showBottomBorder ? [styles.flex, styles.bottomBorder] : styles.flex}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {this.props.children}
                            </Text>
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
    iconStyle: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.itemCell,
        flex: 1,
        flexDirection: 'row',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    leftContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    flex: {
        flex: 1        
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
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 16,
        alignSelf: 'center',
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