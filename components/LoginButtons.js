import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 2rem auto;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const GoogleButton = styled(LoginButton)`
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #dddddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const KakaoButton = styled(LoginButton)`
  background-color: #FEE500;
  color: #000000;
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

export default function LoginButtons() {
  return (
    <ButtonContainer>
      <GoogleButton onClick={() => signIn('google')}>
        <Image 
          src="/구글.png" 
          alt="Google" 
          width={24} 
          height={24} 
        />
        <ButtonText>Google로 계속하기</ButtonText>
      </GoogleButton>
      
      <KakaoButton onClick={() => signIn('kakao')}>
        <Image 
          src="/카카오톡.png" 
          alt="Kakao" 
          width={24} 
          height={24} 
        />
        <ButtonText>카카오로 계속하기</ButtonText>
      </KakaoButton>
    </ButtonContainer>
  );
}
