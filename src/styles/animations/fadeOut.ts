import { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

export default css`
  animation: ${fadeOut} 200ms linear;
`;
