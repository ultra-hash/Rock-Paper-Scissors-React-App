import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 2px solid #ffffff;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`
export const Paragraph = styled.p`
  font-size: 20px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  font-family: 'Roboto';
  font-size: ${props => (props.size ? `${props.size}px` : `18px`)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`
export const ScoreContainer = styled.div`
  border-radius: 10px;
  min-width: 100px;
  background-color: #ffffff;
  text-align: center;
`
export const Heading = styled.h1`
  color: ${props => (props.color ? props.color : '#ffffff')};
  margin: 0;
  font-family: 'Bree Serif';
`

export const HundredPixiesDiv = styled.div`
  width: 100px;
`
