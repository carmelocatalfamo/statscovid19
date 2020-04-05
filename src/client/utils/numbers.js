import format from 'format-number'

export const formatNumber = num => {
  return format({ integerSeparator: '.', decimal: ',' })(num)
}
