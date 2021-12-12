import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Colors from '../../constants/Colors'
import { ITask } from '../../types'
import TaskView from './TaskView'

interface TaskProps {
  tasks: ITask[]
}

function TaskList({ tasks }: TaskProps) {
  const renderItem = ({ item }: { item: ITask }) => <TaskView {...item} />

  return (
    <FlatList
      style={styles.list}
      data={tasks}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 50 }}
      keyExtractor={(item) => item.id ?? ''}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    height: 50,
    backgroundColor: Colors.darker,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: Colors.darkForce,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  }
})

export default TaskList
