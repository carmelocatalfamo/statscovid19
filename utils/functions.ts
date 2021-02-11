const locale = 'it-IT'

export const toLocaleString = (num: number) => num.toLocaleString(locale)

export const toLocaleDate = (date: Date) => new Date(date).toLocaleDateString(locale)
