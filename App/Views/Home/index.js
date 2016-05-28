import React, {
  Component,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native'

import moment from 'moment'
import GiftedListView from 'react-native-gifted-listview'
import {ajax} from '../../Network'
import styleUtils from '../../Styles'

function getAvatarUrl(ID) {
    return 'http://lorempixel.com/68/68/people/' + ID
}

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <GiftedListView
                customStyles={customStyles}
                rowView={this._renderRowView}
                onFetch={this._onFetch}
                firstLoader={true}
                pagination={true} 
                refreshable={true} 
                withSections={false}
            />
        )
    }
    
    _onFetch(page = 1, callback, options) {
        ajax({
            url: 'timeline.json'
        }).then(res => {
            if(!res.err_code) {
                callback(res.data)    
            }
        })
    }
    
    _renderRowView(info) {
        return (
            <TouchableHighlight underlayColor='transparent'>
                <View style={styles.tweetContainer}>
                    <Image source={{uri: getAvatarUrl(info.avatar)}} style={styles.avatar} />
                    <View style={styles.rightContainer}>
                        <View style={styles.userContainer}>
                        <Text style={styles.name}>{info.nickname}</Text>
                        <Text style={styles.time}>{moment(info.created_at * 1000).fromNow()}</Text>
                        </View>
                        <Text style={styles.text}>{info.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const customStyles = {
    paginationView: {
        ...styleUtils.containerBg
    }
}

const styles = StyleSheet.create(styleUtils.card)