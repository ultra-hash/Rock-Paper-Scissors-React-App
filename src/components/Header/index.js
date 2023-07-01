import {
  HeaderContainer,
  Paragraph,
  ScoreContainer,
  Heading,
  HundredPixiesDiv,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <HundredPixiesDiv>
        <Heading>Rock Paper Scissors</Heading>
      </HundredPixiesDiv>
      <ScoreContainer>
        <Paragraph color="#223a5f" bold>
          Score
        </Paragraph>
        <Paragraph color="#223a5f" size={30} bold>
          {score}
        </Paragraph>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
