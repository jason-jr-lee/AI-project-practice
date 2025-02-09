import styled from 'styled-components';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.span`
  color: #333;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #FF1B6B;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #FF1B6B, #45CAFF);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <Logo>My Next App</Logo>
        </Link>
        <NavLinks>
          {session ? (
            <>
              <NavLink>{session.user.name}</NavLink>
              <LoginButton onClick={() => signOut()}>로그아웃</LoginButton>
            </>
          ) : (
            <Link href="/login">
              <LoginButton as="span">로그인</LoginButton>
            </Link>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}
