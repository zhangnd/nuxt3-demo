export const formatTime = (time: number, fmt: string) => {
  if (!time) return
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
    if (new RegExp(`(${key})`).test(fmt)) {
      const value: any = o[key]
      fmt = fmt.replace(RegExp.$1, value < 10 ? `0${value}` : value)
    }
  })
  return fmt
}