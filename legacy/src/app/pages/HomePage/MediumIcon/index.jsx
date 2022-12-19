import { Container } from 'app/components/Styled';
import { ReactComponent as Logo } from './medium.svg';
import styled from 'styled-components';

export default function MediumIcon(props) {
  const size = props.size ? props.size : 70;
  function onClickMediumLogo() {
    window.open('https://dodo4114.medium.com', '__blank');
  }
  return (
    <Circle size={size} onClick={onClickMediumLogo}>
      <Logo width={size * 0.7} fill="white" />
    </Circle>
  );
}

const Circle = styled(Container)`
  width: ${p => p.size}px;
  min-width: ${p => p.size}px;
  height: ${p => p.size}px;
  min-height: ${p => p.size}px;
  background-color: black;
  border-radius: 1000px;
  /* aspect-ratio: 1; */
  flex: 1;
  cursor: pointer;
`;
