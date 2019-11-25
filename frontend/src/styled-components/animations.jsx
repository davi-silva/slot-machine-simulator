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

export const blinkPayTable = keyframes`
  0% {
    background: #fff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
	20% {
    background: #fff453;
    box-shadow: inset 0px 0px 5px rgba(255, 156, 0, 0.5);
	}
  40% {
    background: #fff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  60% {
    background: #fff453;
    box-shadow: inset 0px 0px 5px rgba(255, 156, 0, 0.5);
	}
  80% {
    background: #fff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  100% {
    background: #fff453;
    box-shadow: inset 0px 0px 5px rgba(255, 156, 0, 0.5);
	}
`;

export const blinkTopBottomWinningLine = keyframes`
  0% {
    opacity: 0;
  }
	20% {
    opacity: 0.33;
	}
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0.33;
	}
  100% {
    opacity: 0;
  }
`;

export const blinkCenterWinningLine = keyframes`
  0% {
    opacity: 0;
  }
	20% {
    opacity: 0.66;
	}
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0.66;
	}
  100% {
    opacity: 0;
  }
`;

export const spinningWheels = keyframes`
  0% {
    transform: translateY(-28px);
    filter: blur(0px);
  }
  35% {
    filter: blur(3px);
  }
  50% {
    transform: translateY(-283px);
  }
  75% {
    filter: blur(3px);
  }
  100% {
    transform: translateY(-28px);
    filter: blur(0px);
  }
`;
