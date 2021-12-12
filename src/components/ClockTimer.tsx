import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { selectColorByTime } from '../utils'
import colors from '../constants/Colors'

export function ClockTimer({ remainingTime = 0 }) {
  return (
    <>
      {remainingTime > 0 ? (
        <View style={styles(remainingTime).clock}>
          <FontAwesomeIcon icon={faClock} color={colors.dark} size={16} />
        </View>
      ) : (
        <View>
          <FontAwesomeIcon icon={faCalendar} color={colors.gray} size={16} />
        </View>
      )}
    </>
  )
}

const styles = (remainingTime: number) =>
  StyleSheet.create({
    clock: {
      backgroundColor: selectColorByTime(remainingTime),
      borderRadius: 100,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
