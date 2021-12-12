import { ITask, IWeekday, IWeekdayPercent, IProjectTasks } from '../types'
import StyleColors from '../constants/Colors'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400
const weekSeconds = 604800

export const weekdaysList = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const colors = [
  StyleColors.red,
  StyleColors.orangeDark,
  StyleColors.gold,
  StyleColors.yellow,
  StyleColors.cyan
]

export function selectColorByTime(remainingTime: number) {
  const rTime = Math.abs(remainingTime)

  const getColor = () => {
    if (rTime < minuteSeconds) return colors[0]
    if (rTime > minuteSeconds && rTime < hourSeconds) return colors[1]
    if (rTime > hourSeconds && rTime < daySeconds) return colors[2]
    if (rTime > daySeconds && rTime < weekSeconds) return colors[3]
    else return colors[4]
  }

  return getColor()
}

export function remainsFormatText(remainingTime: number) {
  const rTime = Math.abs(remainingTime)

  const getText = () => {
    if (rTime <= minuteSeconds) return rTime > 1 ? "Seg's" : 'Seg'
    if (rTime > minuteSeconds && rTime < hourSeconds)
      return rTime >= minuteSeconds * 2 ? "Min's" : 'Min'
    if (rTime > hourSeconds && rTime < daySeconds)
      return rTime >= hourSeconds * 2 ? 'Horas' : 'Hora'
    if (rTime > daySeconds && rTime < weekSeconds)
      return rTime >= daySeconds * 2 ? 'Dias' : 'Dia'

    return 'Semana(s)'
  }

  const text = getText()

  return remainingTime > 0 ? text : text + ' atrás'
}

export function remainsFormatValue(remainingTime: number) {
  const rTime = Math.abs(remainingTime)

  const getMagnitude = () => {
    if (rTime <= minuteSeconds) return 1
    if (rTime > minuteSeconds && rTime < hourSeconds) return minuteSeconds
    if (rTime > hourSeconds && rTime < daySeconds) return hourSeconds
    if (rTime > daySeconds && rTime < weekSeconds) return daySeconds

    return weekSeconds
  }

  return Math.floor(rTime / getMagnitude())
}

export function MaxIndexByAttr(array: IWeekday[]): IWeekday {
  let max = array[0]

  for (const index of array) {
    if (index['count'] > max['count']) {
      max = index
    }
  }

  return max
}

export function MapPercentageOfMaxPerDay(array: IWeekday[]): IWeekdayPercent[] {
  const max = MaxIndexByAttr(array)
  const percentage = 100 / max?.['count']
  const result: IWeekdayPercent[] = []

  for (const index of array) {
    result.push({
      day: index['day'],
      count: Number(index['count']),
      percent: Math.round(index['count'] * percentage)
    } as IWeekdayPercent)
  }

  return result
}

export function getDescriptionTime(remainingTime = 0) {
  const remainsTime = remainsFormatValue(remainingTime)
  const reamainsTimeText = remainsFormatText(remainingTime)

  return `${remainsTime} ${reamainsTimeText}`
}

export function getTasksOfProject(tasks: IProjectTasks[], projectId?: string) {
  return tasks.find((task) => task.projectId === projectId)?.tasks ?? []
}

export function calcRemainingTime(timer?: string | Date | null) {
  const dateInit = new Date(timer || Date.now())
  const dateCurr = new Date()

  const diff = Number(dateInit) - Number(dateCurr)

  return Math.ceil(diff / 1000)
}

export const filterTasksInProgress = (taskList?: ITask[]) => {
  return taskList?.filter((task) => task.status !== '2') ?? []
}

export const filterActiveTasks = (taskList?: ITask[]) => {
  return (
    taskList?.filter((task) => task.remainingTime && task.remainingTime > 0) ??
    []
  )
}

export const countTasksOverTime = (tasks?: ITask[]) => {
  return (
    tasks?.filter((task) =>
      task.remainingTime ? task.remainingTime < 0 && task.status === '1' : false
    ).length ?? 0
  )
}

export const countTasksDone = (tasks?: ITask[]) => {
  return tasks?.filter((task) => task.status === '2').length ?? 0
}

export const countTasksTimers = (tasks?: ITask[]) => {
  return (
    tasks?.filter((task) =>
      task.remainingTime ? task.remainingTime > 0 && task.status === '1' : false
    ).length ?? 0
  )
}

export const orderByRemainingTime = (taskList?: ITask[]) => {
  return (
    taskList?.sort((a, b) => {
      return !a.remainingTime || !b.remainingTime
        ? 0
        : a.remainingTime - b.remainingTime
    }) ?? []
  )
}

export const selectNextTasks = (tasks: IProjectTasks[], n?: number) => {
  let _tasks: ITask[] = []
  tasks.forEach((task) => (_tasks = _tasks.concat(task.tasks)))

  const _filteredInTimeTasks = filterTasksInProgress(_tasks)?.filter((task) =>
    task.remainingTime ? task.remainingTime > 0 : false
  )

  return orderByRemainingTime(_filteredInTimeTasks)?.slice(0, n)
}

export const selectOverdueTasks = (tasks: IProjectTasks[], n?: number) => {
  let _tasks: ITask[] = []
  tasks.forEach((task) => (_tasks = _tasks.concat(task.tasks)))

  const _filteredOverdueTasks = filterTasksInProgress(_tasks)?.filter(
    (task) => {
      return task.remainingTime ? task.remainingTime < 0 : false
    }
  )

  return orderByRemainingTime(_filteredOverdueTasks)?.slice(0, n)
}

export function getDaysOfDifference(date: Date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  // 1000ms * 60s * 60m * 24h = 1 day in milliseconds
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export function getCurrentWeekday() {
  const dateString = new Date().toLocaleString('en-US', {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    weekday: 'short'
  })

  return dateString.toLowerCase()
}
