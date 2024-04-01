
import { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export default css`
  animation: ${fadeIn} 200ms linear;
`;
