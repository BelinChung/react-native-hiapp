import React, {
    Linking,
    Platform,
    Dimensions,
    Navigator,
    Component
} from 'react-native'

import GiftedMessenger from 'react-native-gifted-messenger'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import {ajax} from '../../Network' 

let STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight
if (Platform.OS === 'android') {
    STATUS_BAR_HEIGHT = ExtraDimensions.get('STATUS_BAR_HEIGHT')
}

let answerTimeout

function _getUniqueId() {
    return Math.round(Math.random() * 10000)          
}

function _format(msg) {
    let messages = []
    msg.forEach(item => {
        let avatar, position 
        if(item.from === 'received') {
            position = 'left'
            avatar = 'https://facebook.github.io/react/img/logo_og.png'
        } else {
            position = 'right'
            avatar = 'https://raw.githubusercontent.com/BelinChung/HiApp/master/src/res/icons/ios/icon-76%402x.png'
        }
        let message = {
            text: item.text,
            image: {uri: avatar},
            position: position,
            date: item.date,
            uniqueId: _getUniqueId(),
        }
        // TODO support image message type
        
        messages.push(message)
    })  
    return messages 
}

export default class MessageView extends Component {

    constructor(props) {
        super(props)

        this._isMounted = false
        
        this.state = {
            messages: [],
            isLoadingEarlierMessages: false,
            allLoaded: false,
        }
    }

    componentDidMount() {
        this._isMounted = true
        
        this.setState({
            isLoadingEarlierMessages: true,
        })
        setTimeout(_ => {
            this.getInitialMessages(messages => {
                this._messages = messages
                this.setMessages(messages)
                this.setState({
                    isLoadingEarlierMessages: false
                })
            })
        }, 600)
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    getInitialMessages(callback) {
        ajax({
            url: 'message.json'
        }).then(res => {
            if(!res.err_code) {
                callback(_format(res.data))    
            }
        })
    }

    setMessageStatus(uniqueId, status) {
        let messages = []
        let found = false

        for (let i = 0; i < this._messages.length; i++) {
            if (this._messages[i].uniqueId === uniqueId) {
                let clone = Object.assign({}, this._messages[i])
                clone.status = status
                messages.push(clone)
                found = true
            } else {
                messages.push(this._messages[i])
            }
        }

        if (found === true) {
            this.setMessages(messages)
        }
    }

    setMessages(messages) {
        this._messages = messages

        this.setState({
            messages: messages,
        })
    }

    handleSend(message = {}) {
        message.uniqueId = Math.round(Math.random() * 10000)
        this.setMessages(this._messages.concat(message))

        setTimeout(() => {
            this.autoAnswer()
            this.setMessageStatus(message.uniqueId, 'Seen')
        }, 1000)
    }
    
    autoAnswer() {
        if (answerTimeout) clearTimeout(answerTimeout)
        answerTimeout = setTimeout(_ => {
            let message = {
                position: 'left',
                text: answers[Math.floor(Math.random() * answers.length)],
                image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
                uniqueId: _getUniqueId(),
            }
            this.setMessages(this._messages.concat(message))
        }, 1000)
    }

    onLoadEarlierMessages() {
        this.setState({
            isLoadingEarlierMessages: true,
        })
        ajax({
            url: 'history_message.json'
        }).then(res => {
            if(!res['err_code']) {
                let earlierMsg = _format(res.data)    
                this.setMessages(earlierMsg.concat(this._messages))
                this.setState({
                    isLoadingEarlierMessages: false,
                    allLoaded: true,
                })
            }
        }) 
    }

    handleReceive(message = {}) {
        this.setMessages(this._messages.concat(message))
    }

    onErrorButtonPress(message = {}) {
        this.setMessageStatus(message.uniqueId, '')
    }

    render() {
        return (
            <GiftedMessenger
                ref={ c => { this._GiftedMessenger = c } }

                styles={styles.bubbleRight}

                autoFocus={false}
                messages={this.state.messages}
                handleSend={this.handleSend.bind(this)}
                onErrorButtonPress={this.onErrorButtonPress.bind(this)}
                maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

                loadEarlierMessagesButton={!this.state.allLoaded}
                onLoadEarlierMessages={this.onLoadEarlierMessages.bind(this)}

                displayNames={true}
                parseText={true}
                isLoadingEarlierMessages={this.state.isLoadingEarlierMessages}
                />
        )
    }
}

const styles = {
    bubbleRight: {
        marginLeft: 70,
        backgroundColor: '#007aff',
    }
}

const answers = [
    'Yes!',
    'No',
    'Hm...',
    'I am not sure',
    'And what about you?',
    'May be ;)',
    'Lorem ipsum dolor sit amet, consectetur',
    'What?',
    'Are you sure?',
    'Of course',
    'Need to think about it',
    'Amazing!!!'
]