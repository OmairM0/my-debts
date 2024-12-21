import styled, { css } from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Line from "../ui/Line";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

const LoginLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  color: var(--color-black);

  @media (min-width: 929px) {
    max-width: 50%;
    margin: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
`;

function Login() {
  const navigate = useNavigate();
  const { isLoading: isLoading2, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading2) navigate("/");
    },
    [isAuthenticated, isLoading2, navigate]
  );

  return (
    <Container>
      <LoginLayout>
        <Logo />
        <Heading as="h4" $align="center">
          تسجيل الدخول
        </Heading>
        <LoginForm />
        <div>
          <Line bottom="20px" />
          <StyledNavLink to="/signup">إنشاء حساب</StyledNavLink>
        </div>
      </LoginLayout>
    </Container>
  );
}

export default Login;
