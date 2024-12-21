import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to{
    transform: rotate(-1turn);
  }
`;

const animloader = keyframes`
  0% {
      border-color: var(--color-red) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0)
        rgba(255, 255, 255, 0);
    }
    33% {
      border-color: var(--color-red) var(--color-red)rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    66% {
      border-color: var(--color-red) var(--color-red) var(--color-red) rgba(255, 255, 255, 0);
    }
    100% {
      border-color: var(--color-red) var(--color-red) var(--color-red) var(--color-red);
    }
`;

const StyledSpinner = styled.div`
  margin: 2rem auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  display: block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: ${animloader} 1s linear infinite alternate;

  // const StyledSpinner = styled.div
`;
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   /* border: 2px solid var(--color-red); */
//   background: radial-gradient(farthest-side, var(--color-red) 94%, #0000)
//       top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(--color-red));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

function SpinnerMini() {
  return <StyledSpinner></StyledSpinner>;
}

export default SpinnerMini;
