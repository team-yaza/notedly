import { useEffect } from "react"
import styled from "styled-components"

import Button from "../components/Button"

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - Notedly"
  }, [])

  return (
    <Wrapper>
      <Form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          required
          id="username"
          name="username"
          placeholder="username"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Password"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
  border: 1px solid #f5f4f0;
`

const Form = styled.form`
  label,
  input {
    display: block;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`

export default SignUp
