import React, {
  Component,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native'

import GiftedListView from 'react-native-gifted-listview'
import fetchService from '../../Network'
import moment from 'moment'

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
                style={styles.listView}
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
        fetchService.ajax({
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
        backgroundColor: '#efeff4'
    }
}

const styles = StyleSheet.create({
    listView: {
        backgroundColor: '#efeff4'    
    },
    tweetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#DAE6F0',
        paddingTop: 4,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 0,
        borderRadius: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        shadowOffset: {
            height: 2,
            width: 1
        }
    },
    avatar: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 4
    },
    userContainer: {
        flexDirection: 'row'
    },
    time: {
        marginLeft: 4,
        fontSize: 13,
        color: '#8999a5',
        marginTop: 2
    },
    name: {
        fontWeight: '600',
        fontSize: 15
    },
    text: {
        marginTop: 5
    },
    rightContainer: {
        flex: 1,
        padding: 10
    }
})