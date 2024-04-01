import { css, keyframes } from 'styled-components';

const fading = keyframes`
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.6  ;
  }
`;

export default css`
  background-color: #d1d1d6;
  animation: ${fading} 1s infinite;
`;
