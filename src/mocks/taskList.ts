import { ITask } from '../types'

export const taskList: ITask[] = [
  {
    id: 'adsdjmsklfmkf',
    title: 'Prova de Redes',
    number: 1,
    remainingTime: 12313,
    note: '# Hello?',
    fixed: false,
    priority: 3,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 60 * 60 * 1000),
    projectId: 'projeto-x'
  },
  {
    id: '2312cd2s124f21',
    title: 'Estudar Matemática',
    number: 2,
    remainingTime: 323,
    note: '# Hello?',
    fixed: false,
    priority: 3,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 60 * 60 * 1000),
    projectId: 'projeto-x'
  },
  {
    id: 'fsafdfdafadfdasf',
    title: 'Enviar Projeto',
    number: 3,
    remainingTime: 2333,
    note: '# Hello?',
    fixed: false,
    priority: 3,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 60 * 60 * 1000),
    projectId: 'projeto-x'
  },
  {
    id: 'dfadsfsfadfff',
    title: 'Trancar curso',
    number: 1,
    remainingTime: 666,
    note: '# Hello?',
    fixed: false,
    priority: 3,
    status: 'open',
    created_at: new Date(),
    closed_in: null,
    timer: new Date(new Date().getTime() + 60 * 60 * 1000),
    projectId: 'projeto-x'
  }
]
