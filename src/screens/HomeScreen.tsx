import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import TaskList from '../components/Task/TaskList'
import Colors from '../constants/Colors'

import { taskList } from '../mocks/taskList'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Taskiano</Text>
      <View style={styles.separator} />
      <TaskList tasks={taskList} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.white,
    textShadowColor: Colors.darker,
    textShadowOffset: { width: -3, height: 1 },
    textShadowRadius: 15
  },
  separator: {
    marginVertical: 30,
    height: 8,
    borderRadius: 5,
    width: '80%',
    backgroundColor: Colors.highPurple
  }
})
