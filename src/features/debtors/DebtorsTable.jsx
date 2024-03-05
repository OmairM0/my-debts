import styled from "styled-components";
import { useDebtors } from "./useDebtors";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { IoMdMore } from "react-icons/io";
import Table from "../../ui/Table";
import { useNavigate } from "react-router-dom";
import LoadingError from "../../ui/LoadingError";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import AddDebtorsForm from "./AddDebtorsForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteDebtor } from "./useDeleteDebtor";
import { useDebts } from "./useDebts";

const DebtorName = styled.div`
  cursor: pointer;
`;

const Currency = styled.div`
  font-family: monospace;
`;

function DebtorsTable() {
  const { debtors, isLoading, error } = useDebtors();
  const { deleteDebtor, isDeleting } = useDeleteDebtor();
  // const {debts} = useDebts()

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (error) return <LoadingError resourceName="جدول المديَنين" />;

  return (
    <Menus>
      <Table columns="4fr 0.5fr 0.5fr">
        <Table.Header>
          <div>الإسم</div>
          <div>الرصيد</div>
          <div></div>
        </Table.Header>
        <Table.Body>
          {debtors.map((debtor) => {
            return (
              <Table.Row key={debtor.id}>
                <DebtorName onClick={() => navigate(`/home/${debtor.id}`)}>
                  {debtor.name}
                </DebtorName>
                <Currency>{formatCurrency(debtor.debts)}</Currency>

                <Modal>
                  <Menus.Menu>
                    <Menus.Toggle id={debtor.id} />
                    <Menus.List id={debtor.id}>
                      <Modal.Open openwindowname="editDebtor">
                        <Menus.Button icon={<HiPencil />}>تعديل</Menus.Button>
                      </Modal.Open>
                      <Modal.Open openwindowname="deleteDebtor">
                        {debtor.debts === null ? (
                          <Menus.Button icon={<HiTrash />}>حذف</Menus.Button>
                        ) : (
                          false
                        )}
                      </Modal.Open>
                    </Menus.List>
                    <Modal.Window name="editDebtor">
                      <AddDebtorsForm debtorToEdit={debtor} />
                    </Modal.Window>
                    <Modal.Window name="deleteDebtor">
                      <ConfirmDelete
                        resourceName={debtor.name}
                        onConfirm={() => deleteDebtor(debtor.id)}
                        disabled={isDeleting}
                      />
                    </Modal.Window>
                  </Menus.Menu>
                </Modal>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Menus>
  );
}

export default DebtorsTable;
