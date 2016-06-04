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
import ParsedText from 'react-native-parsed-text'
import {ajax} from '../../Network'
import styleUtils from '../../Styles'
import {getAvatarUrl} from '../../Utils'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeline: []
        }
    }
    
    render() {
        return (
            <GiftedListView
                enableEmptySections={true}
                customStyles={customStyles}
                rowView={this._renderRowView.bind(this)}
                onFetch={this._onFetch.bind(this)}
                firstLoader={true}
                pagination={true} 
                refreshable={true} 
                withSections={false}
            />
        )
    }
    
    _onFetch(page = 1, callback, options) {
        if(page === 1 && options.firstLoad) {
            ajax({
                url: 'timeline.json'
            }).then(res => {
                if(!res.err_code) {
                    this.setState({
                        timeline: res.data,
                    })
                    callback(this.state.timeline)    
                }
            })
        } else if(page === 1 && !options.firstLoad) {
            ajax({
                url: 'refresh_timeline.json'
            }).then(res => {
                if(!res.err_code) {
                    let oldTimeline = this.state.timeline
                    this.setState({
                        timeline: res.data.concat(oldTimeline)
                    })
                    callback(this.state.timeline)    
                }
            })
        } else {
            ajax({
                url: 'more_timeline.json'
            }).then(res => {
                if(!res.err_code) {
                    callback(res.data, {
                        allLoaded: true
                    })    
                }
            })
        }
    }
    
    _renderRowView(info) {
        return (
            <TouchableHighlight underlayColor='transparent'>
                <View style={styles.tweetContainer}>
                    <View style={styles.topContainer}>
                        <Image source={{uri: getAvatarUrl(info.avatar)}} style={styles.avatar} />                
                        <View>
                            <View style={styles.userContainer}>
                                <Text style={styles.name}>{info.nickname}</Text>
                                <Text style={styles.time}>{'#' + info.id + ' '} {moment(info.created_at * 1000).fromNow()}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.middleContainer}>
                        <ParsedText
                            parse={
                            [{type: 'url', style: customStyles.url, onPress: this._handleUrlPress.bind(this)}]}
                        >{info.text}</ParsedText>
                        {this._renderMsgImage(info)}
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableHighlight style={styles.bottomTool}>
                            <Text style={styles.bottomToolText}>Forward</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.bottomTool}>
                            <Text style={styles.bottomToolText}>Comment</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.bottomTool}>
                            <Text style={styles.bottomToolText}>Like</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    
    _renderMsgImage(info) {
        if(info.original_pic) {
            return (
                <Image source={{uri: info.original_pic}} style={[styles.msgImage, { resizeMode: Image.resizeMode.cover }]} />
            )
        }
    }
    
    _handleUrlPress(url) {
        this.props.navigator.push({
            title: 'WebView',
            id: 'webview',
            params: {
                url: url
            }
        })     
    }
}

const customStyles = {
    paginationView: {
        ...styleUtils.containerBg
    },
    url: {
        color: '#007aff'
    }
}

const styles = StyleSheet.create(styleUtils.card)