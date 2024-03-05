import styled from "styled-components";

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;

  /* Responsive Styles */
  @media (min-width: 576px) {
    /* Small Devices => Landscape Phones */
    max-width: 540px;
  }
  @media (min-width: 768px) {
    /* Medium Devices => Tablets */

    max-width: 720px;
  }
  @media (min-width: 929px) {
    /* Large Devices => Desktops */

    max-width: 960px;
  }
  @media (min-width: 1200px) {
    /* Desktops */

    max-width: 1140px;
  }
`;

export default Container;
