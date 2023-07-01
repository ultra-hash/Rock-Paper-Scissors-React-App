import {Component} from 'react'
import {
  OuterContainer,
  InnerContainer,
  RulesContainer,
} from './styledComponents'
import Header from '../Header'
import GameView from '../GameView'
import GameResultsView from '../GameResultsView'
import Rules from '../Rules'

class PlayingView extends Component {
  state = {
    score: 0,
    playerChoice: '',
    opponentChoice: '',
    isGameOver: false,
    result: '',
  }

  onSelectChoice = id => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    const playerChoice = id
    const opponentChoice = choicesList[index].id
    let {score} = this.state
    let result = ''
    if (playerChoice === opponentChoice) {
      result = 'IT IS DRAW'
    } else if (
      (playerChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS')
    ) {
      result = 'YOU WON'
      score += 1
    } else {
      result = 'YOU LOSE'
      score -= 1
    }

    this.setState({
      playerChoice,
      opponentChoice,
      isGameOver: true,
      result,
      score,
    })
  }

  onClickPlayAgainBtn = () => {
    this.setState({isGameOver: false})
  }

  render() {
    const {score, playerChoice, opponentChoice, isGameOver, result} = this.state
    const {choicesList} = this.props
    return (
      <OuterContainer>
        <InnerContainer>
          <Header score={score} />
          {!isGameOver && (
            <GameView
              choicesList={choicesList}
              selectChoice={this.onSelectChoice}
            />
          )}
          {isGameOver && (
            <GameResultsView
              choicesList={choicesList}
              playerChoice={playerChoice}
              opponentChoice={opponentChoice}
              playAgain={this.onClickPlayAgainBtn}
              result={result}
            />
          )}
          <RulesContainer>
            <Rules />
          </RulesContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default PlayingView
