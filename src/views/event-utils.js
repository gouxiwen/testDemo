let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  // {
  //   // id: createEventId(),
  //   id: 0,
  //   resourceId: 0,
  //   title: '张三',
  //   // start: todayStr,
  //   // start: '2021/3/16', // 不支持的时间格式
  //   start: '2021-03-16',
  //   backgroundColor: 'red',
  //   borderColor: 'red',
  //   detail: '周会'
  // },
  {
    // id: createEventId(),
    id: 1,
    resourceId: 1,
    title: '李四',
    start: todayStr + 'T12:00:00',
    // start: '2021-03-16 12:00:00',
    end: todayStr + 'T15:00:00',
    // end: '1615878000000',  // 不支持的时间格式
    // end: 1615878000000,
    backgroundColor: 'green',
    borderColor: 'green',
    editable: false

  },
  {
    // id: createEventId(),
    id: 2,
    resourceId: 1,
    // resourceIds: [1,2], // 关联多个资源
    title: '周会',
    start: todayStr + 'T16:00:00',
    // start: 1615870000000,
    end: todayStr + 'T18:00:00',
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  {
    id:3,
    resourceId: 1,
    title: '事件',
    // start: '2021-03-30 12:00:00',
    // end: '2021-03-30 14:00:00',
    start: todayStr + 'T16:00:00',
    end: todayStr + 'T18:00:00',
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  {
    id:4,
    resourceId: 1,
    title: '事件',
    start: '2021-05-12 12:00:00',
    end: '2021-05-12 14:00:00',
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  {
    id:5,
    resourceId: 1,
    title: '全天事件',
    start: '2021-05-26 10:00:00',
    end: '2021-05-26 16:00:00',
    allDay: true,
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  {
    id:6,
    resourceId: 1,
    title: '事件',
    start: '2021-05-12 12:00:00',
    end: '2021-05-12 14:00:00',
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  {
    start: '2021-03-31 10:00:00',
    end: '2021-03-31 16:00:00',
    display: 'background', //  背景事件
    color: '#ff9f89'
  },
  {
    start: '2021-05-26 10:00:00',
    end: '2021-05-26 16:00:00',
    allDay: true,
    display: 'background',
    color: 'pink'
  }
]

export function createEventId() {
  return String(eventGuid++)
}