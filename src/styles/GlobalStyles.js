import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Score = styled.h1`
  font-size: 80px;
  font-weight: 800;
  margin-top: 80px;
  color: #D5D0CD;
  font-family: 'Mulish', sans-serif;
  margin-bottom: 0;
`;

export const RemainingGuesses = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #D5D0CD;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
`;

export const Hint = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #FFF;
  font-family: 'Mulish', sans-serif;
  text-align: center;
  padding: 0 20px;
  max-width: 600px;
`;

export const Button = styled.button`
  background-color: ${props => props.bgColor || '#7899D4'};
  color: #FFF;
  border: none;
  border-radius: ${props => props.borderRadius || '40px'};
  padding: ${props => props.padding || '15px 25px'};
  font-size: ${props => props.fontSize || '18px'};
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  cursor: pointer;
  margin-top: ${props => props.marginTop || '40px'};
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
  border: 1px solid #D5D0CD;
  padding: 5px 5px 5px 24px;
  border-radius: 40px;
  background-color: #FFF;
  margin: 40px 12px 10px 12px;
  width: 90%;
  max-width: 400px;
`;

export const GuessInput = styled.input`
  flex: 1;
  font-size: 16px;
  color: #738296;
  font-family: 'Mulish', sans-serif;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #D5D0CD;
  }
`;

export const StartScreenContainer = styled(Container)`
  justify-content: space-evenly;
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 300px;
  margin-bottom: 10px;
`;

export const Stat = styled.span`
  font-size: 24px;
  color: #8D7C81;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
`;

export const StatValue = styled.span`
  font-size: 24px;
  color: #8D7C81;
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  object-fit: cover;
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
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;