import React from 'react'
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Alert
} from 'react-native'

import CameraRollPicker from 'react-native-camera-roll-picker'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class CustomActions extends React.Component {
    constructor(props) {
        super(props)
        this._images = []
        this.state = {
            modalVisible: false,
        }
        this.onActionsPress = this.onActionsPress.bind(this)
        this.selectImages = this.selectImages.bind(this)
    }

    setImages(images) {
        this._images = images
    }

    getImages() {
        return this._images
    }

    setModalVisible(visible = false) {
        this.setState({ modalVisible: visible })
    }

    onActionsPress() {
        const options = ['Choose From Library', 'Send Location', 'Cancel']
        const cancelButtonIndex = options.length - 1
        this.context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex,
        }, 
        buttonIndex => {
            switch (buttonIndex) {
            case 0:
                this.setModalVisible(true)
                break
            case 1:
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.props.onSend({
                            location: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            },
                        })
                    },
                    error => Alert(error.message),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                )
                break
            }
        })
    }

    selectImages(images) {
        this.setImages(images)
    }

    renderNavBar() {
        return (
            <NavBar style={{
                statusBar: {
                    backgroundColor: '#FFF',
                },
                navBar: {
                    backgroundColor: '#FFF',
                },
            }}>
                <NavButton onPress={() => {
                    this.setModalVisible(false)
                } }>
                    <NavButtonText style={styles.black}>
                        {'Cancel'}
                    </NavButtonText>
                </NavButton>
                <NavTitle style={styles.black}>
                    {'Camera Roll'}
                </NavTitle>
                <NavButton onPress={() => {
                    this.setModalVisible(false)

                    const images = this.getImages().map(image => {
                        return {
                            image: image.uri,
                        }
                    })
                    this.props.onSend(images)
                    this.setImages([])
                } }>
                    <NavButtonText style={styles.black}>
                        {'Send'}
                    </NavButtonText>
                </NavButton>
            </NavBar>
        )
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon()
        }
        return (
            <View
                style={[styles.wrapper, this.props.wrapperStyle]}
                >
                <Text
                    style={[styles.iconText, this.props.iconTextStyle]}
                    >
                    +
        </Text>
            </View>
        )
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
                >
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false)
                    } }
                    >
                    {this.renderNavBar()}
                    <CameraRollPicker
                        maximum={10}
                        imagesPerRow={4}
                        callback={this.selectImages}
                        selected={[]}
                        />
                </Modal>
                {this.renderIcon()}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    black: {
        color: '#000'
    }
})

CustomActions.contextTypes = {
    actionSheet: React.PropTypes.func,
}

CustomActions.defaultProps = {
    onSend: () => { },
    options: {},
    icon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
}

CustomActions.propTypes = {
    onSend: React.PropTypes.func,
    options: React.PropTypes.object,
    icon: React.PropTypes.func,
    containerStyle: View.propTypes.style,
    wrapperStyle: View.propTypes.style,
    iconTextStyle: Text.propTypes.style,
}