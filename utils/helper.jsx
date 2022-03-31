import moment from 'moment'
export const fileNameReqex = /^[A-Za-z0-9_]+$/
export const passWordReqex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

export const dateFormat = 'YYYY-MM-DD'

export const dateFormatter = date => {
  const dataObj = date
  var dateObj = new Date(dataObj)
  var momentObj = moment(dateObj)
  var momentString = momentObj.format('YYYY-MM-DD') // 2016-07-15
  return momentString
}

export const dayFormatter = date => {
  const funcDate = dateFormatter(date)
  var momentString = moment(funcDate).format('dddd, MMMM Do YYYY, h:mm:ss a') // 2016-07-15
  return momentString
}
