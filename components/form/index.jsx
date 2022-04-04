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
  Divider,
  Switch
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
                name="email"
                id="email"
                {...getFieldProps('email')}
              />
              {touched.email && errors.email ? (
                <div style={{ color: 'red' }}>{errors.email}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
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
              <FormLabel htmlFor="name">Name</FormLabel>
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
              <FormLabel htmlFor="password">Password</FormLabel>
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
                Password Confirmation
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
            <Switch
              type="checkbox"
              name="done"
              id="done"
              {...getFieldProps('done')}
            />
            {touched.done && errors.done ? (
              <div style={{ color: 'red' }}>{errors.done}</div>
            ) : null}
            <CustomFormControl>
              <FormLabel htmlFor="tasktitle">Task name</FormLabel>
              <Input
                type="text"
                name="tasktitle"
                id="tasktitle"
                {...getFieldProps('tasktitle')}
              />
              {touched.tasktitle && errors.tasktitle ? (
                <div style={{ color: 'red' }}>{errors.tasktitle}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="description">Task description</FormLabel>
              <Input
                type="text"
                name="description"
                id="description"
                {...getFieldProps('description')}
              />
              {touched.description && errors.description ? (
                <div style={{ color: 'red' }}>{errors.description}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="startdate">Task start date</FormLabel>
              <Input
                type="date"
                name="startdate"
                id="startdate"
                {...getFieldProps('startdate')}
              />
              {touched.startdate && errors.startdate ? (
                <div style={{ color: 'red' }}>{errors.startdate}</div>
              ) : null}
            </CustomFormControl>
            <CustomFormControl>
              <FormLabel htmlFor="enddate">Task expected finish date</FormLabel>
              <Input
                type="date"
                name="enddate"
                id="enddate"
                {...getFieldProps('enddate')}
              />
              {touched.enddate && errors.enddate ? (
                <div style={{ color: 'red' }}>{errors.enddate}</div>
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
