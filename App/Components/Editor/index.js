import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class Editor extends React.Component {
  render() {
    const { enableTools, text, placeholder, onChangeText, ...props } = this.props
    return (
      <View>
        <TextInput
          multiline
          autoCapitalize="none"
          placeholder={this.props.placeholder}
          style={styles.textInput}
          value={this.props.text}
          onChangeText={this.props.onChangeText}
        />
        <View style={styles.toolbar}>
          {this.renderTool('camera', 'ios7cameraoutline')}
          {this.renderTool('album', 'pic')}
          {this.renderTool('emotion', 'emotion')}
          {this.renderTool('at', 'iosatoutline')}
          {this.renderTool('location', 'location')}
        </View>
      </View>
    )
  }

  renderTool(tool, icon, handle = () => { }) {
    if (this.enableTool(tool)) {
      return (
        <TouchableOpacity style={styles.tool}>
          <Icon size={24} name={icon} color={'#666'}/>
        </TouchableOpacity>
      )
    }
  }

  enableTool(tool) {
    const list = this.props.enableTools
    return ~list.trim().indexOf(tool)
  }
}

Editor.defaultProps = {
  enableTools: 'camera, album, emotion, at, location'
}

Editor.propTypes = {
  enableTools: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func
}

const styles = StyleSheet.create({
  textInput: {
    height: 180,
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  toolbar: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#f9f9f9',
    borderWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#dadada',
  },
  tool: {
    width: 48,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  }
})
