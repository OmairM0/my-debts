import { format } from "date-fns";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useDebts } from "./useDebts";
import ButtonText from "../../ui/ButtonText";
import Row from "../../ui/Row";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import AddIcon from "../../ui/AddIcon";
import { MdPostAdd } from "react-icons/md";
import AddNewDebt from "../debts/AddNewDebt";
import { useDebtor } from "./useDebtor";
import Error from "../../ui/Error";
import ConfirmDelete from "../../ui/ConfirmDelete";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteDebt } from "../debts/useDeleteDebt";

const StyledError = styled.div`
  text-align: center;
`;

function DebtorDetails() {
  // check if debtor exist
  const { debtor, isLoading: isDebtorLoading } = useDebtor();

  const { debts, isLoading } = useDebts();
  const { deleteDebt, isDeleting } = useDeleteDebt();
  const navegate = useNavigate();

  if (isDebtorLoading) return <Spinner />;
  if (!debtor.length)
    return (
      <StyledError>
        <Error message="لايوجد دين بإسم هذا الشخص" />
        <ButtonText onClick={() => navegate(-1)}>&rarr; عودة للخلف</ButtonText>
      </StyledError>
    );

  if (isLoading) return <Spinner />;

  const { name, id: debtorId } = debtor[0];

  const totalAcount = debts.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <>
      <Row type="horizontal">
        <div>
          <Heading as="h3" $align="center">
            {name}
          </Heading>
          <span>إجمالي الحساب: {totalAcount}</span>
        </div>
        <ButtonText onClick={() => navegate(-1)}>&rarr; عودة للخلف</ButtonText>
      </Row>

      <Menus>
        <Table columns="0.5fr 4fr 1fr 0.5fr">
          <Table.Header>
            <div>المبلغ</div>
            <div>البيان</div>
            <div>التاريخ</div>
            <div></div>
          </Table.Header>
          <Table.Body>
            {!debts.length ? (
              <Table.Empty>لايوجد بيانات لعرضها.</Table.Empty>
            ) : (
              debts.map((debt) => {
                return (
                  <Table.Row key={debt.id}>
                    <div>{debt.amount}</div>
                    <div>{debt.description}</div>
                    <div>
                      {format(new Date(debt.created_at), "MMMM dd yyyy")}
                    </div>

                    <Modal>
                      <Menus.Menu>
                        <Menus.Toggle id={debt.id} />
                        <Menus.List id={debt.id}>
                          <Modal.Open openwindowname="editDebt">
                            <Menus.Button icon={<HiPencil />}>
                              تعديل
                            </Menus.Button>
                          </Modal.Open>
                          <Modal.Open openwindowname="deleteDebt">
                            <Menus.Button icon={<HiTrash />}>حذف</Menus.Button>
                          </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="editDebt">
                          <AddNewDebt debtorid={debtorId} debtToEdit={debt} />
                        </Modal.Window>
                        <Modal.Window name="deleteDebt">
                          <ConfirmDelete
                            resourceName={debt.description}
                            onConfirm={() => deleteDebt(debt.id)}
                            disabled={isDeleting}
                          />
                        </Modal.Window>
                      </Menus.Menu>
                    </Modal>
                  </Table.Row>
                );
              })
            )}
          </Table.Body>
        </Table>
      </Menus>

      <Modal>
        <Modal.Open openwindowname="addNewDebt">
          <AddIcon icon={<MdPostAdd />} />
        </Modal.Open>
        <Modal.Window name="addNewDebt">
          <AddNewDebt debtorid={debtorId} />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default DebtorDetails;
