import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin-top: 100px;
  color: #fff;
  font-family: "Mulish", sans-serif;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Score = styled.h1`
  font-size: 80px;
  font-weight: 800;
  color: #d5d0cd;
  font-family: "Mulish", sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RemainingGuesses = styled.p`
  font-size: 16px;
  color: #d5d0cd;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
`;

export const MovieReveal = styled.p`
  margin-top: 20px;
  font-size: 24px;
  color: #fff;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Hint = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #fff;
  font-family: "Mulish", sans-serif;
  text-align: center;
  padding: 0 20px;
  max-width: 600px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#7899D4"};
  color: #fff;
  border: none;
  border-radius: ${(props) => props.borderRadius || "40px"};
  padding: ${(props) => props.padding || "15px 25px"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || "40px"};
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const GuessInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d5d0cd;
  padding: 5px 5px 5px 24px;
  border-radius: 40px;
  background-color: #fff;
  margin: 40px 12px 10px 12px;
  width: 90%;
  max-width: 400px;
`;

export const GuessInput = styled.input`
  flex: 1;
  font-size: 16px;
  color: #738296;
  font-family: "Mulish", sans-serif;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #d5d0cd;
  }
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #ffffff33;
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StatsBar = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px 20px;
  color: #fff;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 14px;
  z-index: 10;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

export const StatValue = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const SkipButton = styled(Button)`
  background-color: #666;

  &:hover {
    background-color: #555;
  }
`;
