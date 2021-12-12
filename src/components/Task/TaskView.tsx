import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import CheckBox from '../Checkbox'
import { ClockTimer } from '../ClockTimer'

import { getDescriptionTime } from '../../utils'
import Colors from '../../constants/Colors'
import { ITask } from '../../types'

interface TaskProps extends ITask {
  hideTimer?: boolean
  hideCheckbox?: boolean
}

function TaskView({ remainingTime, ...rest }: TaskProps) {
  const [, setViewTask] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
      </View>

      <TouchableOpacity
        style={styles.timerContainer}
        onPress={() => setViewTask(true)}
      >
        <View style={styles.iconContainer}>
          <ClockTimer remainingTime={remainingTime} />
        </View>

        {rest.hideTimer || !remainingTime ? (
          <Text>{rest.title}</Text>
        ) : (
          <Text
            style={styles.description}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {getDescriptionTime(remainingTime)} - {rest.title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',

    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  checkboxContainer: {
    paddingLeft: 50,
    paddingRight: 15
  },
  timerContainer: {
    flexDirection: 'row'
  },
  iconContainer: {
    width: 28,
    marginRight: 15
  },
  description: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    overflow: 'hidden',
    fontSize: 18,
    paddingRight: 50
  }
})

export default TaskView
