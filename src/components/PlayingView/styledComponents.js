import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  //   border: 1px solid red;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const RulesContainer = styled.div`
  text-align: right;
  width: 100%;
  padding: 10px;
`
