import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoLmnn = `/images/logo${useColorModeValue('', '-light')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoLmnn} width={35} height={35} alt="logo" />
          <Text
            color={useColorModeValue('gray.700', 'blue.50')}
            fontFamily="M PLUS Rounded 1C"
            fontWeight="bold"
            ml={3}
          >
            James Daryl
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
