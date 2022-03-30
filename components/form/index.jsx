import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Box,
  Link,
  Divider
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import { useState } from 'react'

const CustomFormControl = styled(FormControl)`
  margin-bottom: 5px;
  padding: 20px;
`

const CustomContainer = styled(Container)`
  margin-top: 20px;
`

const FormComponent = ({ isLogin, formik }) => {
  const { values, handleChange, handleSubmit, errors, touched, getFieldProps } =
    formik
  const [startDate, setStartDate] = useState(new Date())
  return (
    <CustomContainer maxW="container.sm">
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          <Box>
            <CustomFormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="text"
                name="username"
                id="username"
                {...getFieldProps('username')}
              />
              {touched.username && errors.username ? (
                <div style={{ color: 'red' }}>{errors.username}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                {...getFieldProps('password')}
              />
              {touched.password && errors.password ? (
                <div style={{ color: 'red' }}>{errors.password}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl
              display={{ base: 'flex', md: 'flex' }}
              justify="space-between"
            >
              <Box flexGrow={1}>
                <NextLink href="/register">
                  <Link>No account?</Link>
                </NextLink>
              </Box>
              <Box flexGrow={1}>
                <NextLink href="/register" align="right">
                  <Link>Forgot password?</Link>
                </NextLink>
              </Box>
            </CustomFormControl>
          </Box>
        ) : (
          <Box>
            <CustomFormControl>
              <FormLabel htmlFor="email">Task name</FormLabel>
              <Input
                type="text"
                name="username"
                id="username"
                {...getFieldProps('username')}
              />
              {touched.username && errors.username ? (
                <div style={{ color: 'red' }}>{errors.username}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="email">Task description</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                {...getFieldProps('password')}
              />
              {touched.password && errors.password ? (
                <div style={{ color: 'red' }}>{errors.password}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="email">Task description</FormLabel>
              <Input type="date" />
              {touched.password && errors.password ? (
                <div style={{ color: 'red' }}>{errors.password}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="email">Task description</FormLabel>
              <Input type="date" />
              {touched.password && errors.password ? (
                <div style={{ color: 'red' }}>{errors.password}</div>
              ) : null}
            </CustomFormControl>
          </Box>
        )}

        <CustomFormControl align="center">
          <Button type="submit">SUBMIT</Button>
        </CustomFormControl>
      </form>
    </CustomContainer>
  )
}

export default FormComponent
