import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="ThemeToggle"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeButton
