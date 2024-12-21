import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-gray);
  border-radius: 3px;
  margin-top: 20px;
  min-height: 80vh;
  background-color: var(--color-white);
  font-size: 11px;
  font-weight: 600;
  @media (min-width: 929px) {
    font-size: 14px;
  }
`;

const commonRow = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  /* grid-template-columns: 4fr 0.5fr 0.5fr; */
  grid-template-columns: ${(props) => props.columns};
  gap: 19px;
  align-items: center;
  /* text-align: right; */

  border-radius: 3px 3px 0px 0px;
`;

const StyledHeader = styled(commonRow)`
  background-color: var(--color-grey-50);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-gray);
  padding: 0.4rem 1rem;
  font-weight: bold;
`;

const StyledRow = styled(commonRow)`
  border-bottom: 1px solid var(--color-grey-800);
  padding: 0.4rem 1rem;
  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
  }
`;

const StyledBody = styled(commonRow)`
  /* border-bottom: 1px solid var(--color-grey-100); */
  display: block;
`;

const Empty = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 1.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  // columns={columns}
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return <StyledRow columns={columns}>{children}</StyledRow>;
}

function Body({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledBody role="row" columns={columns}>
      {children}
    </StyledBody>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Empty = Empty;

export default Table;
