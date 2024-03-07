import styled from "styled-components";
import Heading from "../ui/Heading";
import Line from "../ui/Line";
import Logo from "../ui/Logo";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import SignupForm from "../features/authentication/SignupForm";
import Container from "../ui/Container";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

const SignupLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  color: var(--color-black);

  @media (min-width: 929px) {
    max-width: 50%;
    margin: auto;
    gap: 35px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
`;

function Signup() {
  // const navigate = useNavigate();
  // const { isLoading: isLoading2, isAuthenticated } = useUser();

  // useEffect(
  //   function () {
  //     if (isAuthenticated && !isLoading2) navigate("/");
  //   },
  //   [isAuthenticated, isLoading2, navigate]
  // );

  return (
    <Container>
      <SignupLayout>
        <Logo />
        <Heading as="h4" $align="center">
          إنشاء حساب
        </Heading>
        <SignupForm />

        <div>
          <Line bottom="20px" />
          <StyledNavLink to="/login">العودة للخلف&larr;</StyledNavLink>
        </div>
      </SignupLayout>
    </Container>
  );
}

export default Signup;
