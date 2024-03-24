export const formatTime = (time: number, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  if (typeof time !== 'number') {
    return ''
  }
  const date = new Date(time)
  const o: {
    [key: string]: number
  } = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  Object.keys(o).forEach((key: string) => {
    const reg: any = new RegExp(`(${key})`)
    if (reg.test(fmt)) {
      const value: any = o[key]
      fmt = fmt.replace(reg.exec(fmt)[1], value < 10 ? `0${value}` : value)
    }
  })
  return fmt
}