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

const FormComponent = ({ isLogin, isTodo, isRegister, formik }) => {
  const { values, handleChange, handleSubmit, errors, touched, getFieldProps } =
    formik
  const [startDate, setStartDate] = useState(new Date())
  return (
    <CustomContainer maxW="container.sm">
      <form onSubmit={handleSubmit}>
        {isLogin && (
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
                <NextLink href="/register" passHref>
                  <Link>No account?</Link>
                </NextLink>
              </Box>
              <Box flexGrow={1}>
                <NextLink href="/register" align="right" passHref>
                  <Link>Forgot password?</Link>
                </NextLink>
              </Box>
            </CustomFormControl>
          </Box>
        )}
        {isRegister && (
          <Box>
            <CustomFormControl>
              <FormLabel htmlFor="name">Email address</FormLabel>
              <Input
                type="text"
                name="name"
                id="name"
                {...getFieldProps('name')}
              />
              {touched.name && errors.name ? (
                <div style={{ color: 'red' }}>{errors.name}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="text"
                name="email"
                id="email"
                {...getFieldProps('email')}
              />
              {touched.email && errors.email ? (
                <div style={{ color: 'red' }}>{errors.email}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="password">Email address</FormLabel>
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
              <FormLabel htmlFor="password_confirmation">
                Email address
              </FormLabel>
              <Input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                {...getFieldProps('password_confirmation')}
              />
              {touched.password_confirmation && errors.password_confirmation ? (
                <div style={{ color: 'red' }}>
                  {errors.password_confirmation}
                </div>
              ) : null}
            </CustomFormControl>
          </Box>
        )}
        {isTodo && (
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
