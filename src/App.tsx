import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <Container>
      <h3>Hello World</h3>
      <p>This is a test paragraph.</p>
    </Container>
  )
}
