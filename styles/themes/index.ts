import { Theme } from '@/models/Theme'
import { theme as dark } from '@/styles/themes/dark'
import { theme as light } from '@/styles/themes/light'

export default {
  [Theme.light]: light,
  [Theme.dark]: dark
}
