import * as React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import Colors from '../constants/Colors'

interface CheckBoxProps {
  checked?: boolean
  onClick?: () => void
}

function CheckBox(props: CheckBoxProps) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={props.checked ? faCheckSquare : faSquare}
          color={props.checked ? Colors.blueDark : Colors.dark}
          size={24}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: 4
  }
})

export default CheckBox
