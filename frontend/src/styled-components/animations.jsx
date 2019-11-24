/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import { keyframes } from 'styled-components';

export const HoldPlayButton = keyframes`
	0% {
    transform: scale(1, 1);
  }
	100% {
    transform: scale(0.85, 0.85);
	}
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
	100% {
    transform: rotate(360deg);
	}
`;
