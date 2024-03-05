import { Outlet, useLocation } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";

function AppLayout() {
  const currentPage = useLocation();
  // console.log(currentPage.pathname === "/login");
  // console.log(currentPage.pathname === "/signup");
  // console.log(currentPage.pathname === "/settings");
  // console.log(
  //   currentPage.pathname === "/login" ||
  //     currentPage.pathname === "/signup" ||
  //     currentPage.pathname === "/settings"
  // );

  return (
    <>
      {currentPage.pathname === "/login" ||
      currentPage.pathname === "/signup" ||
      currentPage.pathname === "/settings" ? (
        <>
          <Container>
            <Outlet />
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Container>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default AppLayout;
