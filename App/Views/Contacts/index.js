import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    Platform,
    View,
    Text
} from 'react-native'

import GiftedListView from 'react-native-gifted-listview'
import ItemCell from '../../Components/ItemCell'
import styleUtils from '../../Styles'
import {ajax} from '../../Network'
import {getAvatarUrl} from '../../Utils'
import groupBy from 'lodash/groupBy'

export default class ContactsView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let color = Platform.OS === 'android' ? styleUtils.androidSpinnerColor : 'gray'
        return (
            <GiftedListView
                enableEmptySections={true}
                customStyles={customStyles}
                rowView={this._renderRowView.bind(this)}
                onFetch={this._onFetch}
                firstLoader={true}
                pagination={true}
                refreshable={false}
                withSections={true}
                paginationAllLoadedView={this._renderPaginationAllLoadedView}
                sectionHeaderView={this._renderSectionHeaderView}
                spinnerColor={color}
                />
        )
    }

    _onFetch(page = 1, callback, options) {
        ajax({
            url: 'contacts.json'
        }).then(res => {
            if (!res.err_code) {
                let contacts = groupBy(res.data, contact => {
                    return contact.nickname.slice(0,1)
                })
                callback(contacts, {
                    allLoaded: true
                })
            }
        })
    }

    _renderRowView(contact) {
        return (
            <ItemCell
                onPress={this._gotoMessageView.bind(this, {nickename: contact.nickname})}
                subText={contact.location}
                showDisclosureIndicator={true}
                showBottomBorder={true}
                iconStyle={customStyles.itemCellIcon}
                icon={{ uri: getAvatarUrl(contact.avatar) }}>
                {contact.nickname}
            </ItemCell>
        )
    }

    _renderPaginationAllLoadedView() {
        return (
            <View></View>
        )
    }

    _renderSectionHeaderView(sectionData, sectionID) {
        return (
            <View style={Styles.sectionHeader}>
                <Text style={Styles.sectionHeaderText}>
                    {sectionID}
                </Text>
            </View>
        )
    }
    
    _gotoMessageView(params) {
        this.props.navigator.push({
            title: params.nickename,
            id: 'message',
            params: params
        })    
    }
}

const customStyles = {
    paginationView: {
        ...styleUtils.containerBg
    }
}

const Styles = StyleSheet.create({
    sectionHeader: {
        ...styleUtils.containerBg,
        height: 30,
        paddingLeft: 15,        
        justifyContent: 'center'         
    },
    sectionHeaderText: {
        color: '#8e8e93'
    }
})