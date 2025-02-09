import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoginButtons from '../components/LoginButtons';
import Navbar from '../components/Navbar';

const LoginContainer = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const LoginCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  // 이미 로그인한 경우 메인 페이지로 리다이렉트
  if (session) {
    router.push('/');
    return null;
  }

  return (
    <>
      <Navbar />
      <LoginContainer>
        <LoginCard>
          <Title>로그인</Title>
          <LoginButtons />
        </LoginCard>
      </LoginContainer>
    </>
  );
}
