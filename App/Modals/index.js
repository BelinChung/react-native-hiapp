import React from 'react'
import connect from 'redux-connect-decorator'
import PublisherModal from '@Modals/Publisher'

import {
  View,
  Modal
} from 'react-native'

@connect(state => ({
  modalVisible: state.app.modalVisible
}))

export default class Modals extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={() => {}}
          visible={this.props.modalVisible.publisher}
        >
          <PublisherModal></PublisherModal>
        </Modal>
      </View>
    )
  }
}
