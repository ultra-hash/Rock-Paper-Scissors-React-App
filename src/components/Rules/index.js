import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  ModalContainer,
  RulesImage,
  CloseBtnContainer,
  CloseBtn,
  RulesTriggerBtn,
} from './styledComponents'

const Rules = () => (
  <Popup
    modal
    trigger={<RulesTriggerBtn>Rules</RulesTriggerBtn>}
    position="center center"
  >
    {close => (
      <ModalContainer>
        <CloseBtnContainer>
          <CloseBtn onClick={close}>
            <RiCloseLine />
          </CloseBtn>
        </CloseBtnContainer>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </ModalContainer>
    )}
  </Popup>
)

export default Rules
