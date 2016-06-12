import React, { 
    Component     
} from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'

import moment from 'moment'
import ParsedText from 'react-native-parsed-text'
import {getAvatarUrl} from '../../Utils'
import {ajax} from '../../Network'
import styleUtils from '../../Styles'

import CommentComp from '../../Components/Comments'

export default class AboutView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            loadding: true,
            comments: []
        }
    }
    
    componentWillMount() {
        this.props.route.comment = this._comment.bind(this)
    }
    
    componentDidMount() {
        ajax({
            url: 'comments.json'
        }).then(res => {
            if(!res.err_code) {
                let comments
                let random = Math.floor(Math.random()*2)
                !random ? comments = [] : comments = res.data
                
                this.setState({
                    loadding: false,
                    comments: comments  
                }) 
            }
        })    
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>  
                 <View style={cardStyle.tweetContainer}>
                    <View style={cardStyle.topContainer}>
                        <Image source={{uri: getAvatarUrl(this.props.tweet.avatar)}} style={cardStyle.avatar} />                
                        <View>
                            <View style={cardStyle.userContainer}>
                                <Text style={cardStyle.name}>{this.props.tweet.nickname}</Text>
                                <Text style={cardStyle.time}>{'#' + this.props.tweet.id + ' '} {moment(this.props.tweet.created_at * 1000).fromNow()}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={cardStyle.middleContainer}>
                        <ParsedText
                            parse={
                            [{type: 'url', style: {color: '#007aff'}, onPress: this._handleUrlPress.bind(this)}]}
                        >{this.props.tweet.text}</ParsedText>
                        {this._renderMsgImage(this.props.tweet)}
                    </View>
                </View> 
                <View style={styles.commentContainer}>
                    <View style={styles.commentTitle}>
                        <Text style={styles.commentTitleText}>Comments</Text>
                    </View>
                    <CommentComp loadding={this.state.loadding} comments={this.state.comments}/>
                </View>  
            </ScrollView> 
        )
    }
    
    _renderMsgImage(info) {
        if(info.original_pic) {
            return (
                <Image source={{uri: info.original_pic}} style={[cardStyle.msgImage, { resizeMode: Image.resizeMode.cover }]} />
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
    
    _comment() {
        this.props.navigator.push({
            title: 'Comment',
            id: 'comment'
        }) 
    }
}

const cardStyle = styleUtils.card

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    },
    commentContainer: {
        borderWidth: 1,
        borderColor: '#ebe9e9',
        margin: 10,
        marginTop: 10   
    },
    commentTitle: {
        height: 30,  
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#ebe9e9'
    },
    commentTitleText: {
        fontSize: 12,
        color: '#6d6d72'          
    }
})