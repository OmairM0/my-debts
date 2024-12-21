import Modal from "../../ui/Modal";
import AddDebtorsForm from "../debtors/AddDebtorsForm";
import AddIcon from "../../ui/AddIcon";
import DebtorsTable from "../debtors/DebtorsTable";
import { BsPersonFillAdd } from "react-icons/bs";

function HomeContent() {
  return (
    <>
      <DebtorsTable />

      <Modal>
        <Modal.Open openwindowname="addNewDebtor">
          <AddIcon icon={<BsPersonFillAdd />} />
        </Modal.Open>
        <Modal.Window name="addNewDebtor">
          <AddDebtorsForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default HomeContent;
