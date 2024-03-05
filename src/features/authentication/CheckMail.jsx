import styled from "styled-components";

const StyledCheck = styled.div`
  background-color: var(--color-white);
  padding: 2rem 1rem;
  /* min-height: 200px; */
  /* text-wrap: balance; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 21px;
  font-weight: 600;
  /* @media (min-width: 929px) {
    max-width: 50%;
    margin: auto;
  } */
`;

const Img = styled.img`
  width: 30%;
`;

const P = styled.p`
  @media (min-width: 929px) {
    font-size: 16px;
    width: 80%;
  }
`;

function CheckMail() {
  return (
    <StyledCheck>
      <Img src="mail-icon.png" />
      <P>
        قمنا بإرسال رسالة للبريد الإلكتروني المدخل، تحتوي الرسالة على رابط تحقق
        يجب عليك النقر عليه لتأكيد صحة عنوان البريد الإلكتروني الخاص بك وإتمام
        عملية التسجيل
      </P>
    </StyledCheck>
  );
}

export default CheckMail;
