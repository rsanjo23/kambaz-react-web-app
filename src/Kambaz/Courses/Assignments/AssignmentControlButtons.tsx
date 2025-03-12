import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import AssignmentDeleter from "./AssignmentDeleter";

export default function AssignmentControlButtons(
    { assignmentId, deleteAssignment }: {
        assignmentId: string, deleteAssignment: (assignmentId: string) => void;
    }
) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="float-end">
            {
                currentUser.role === "FACULTY" &&
                <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />
            }
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <AssignmentDeleter show={show} handleClose={handleClose} dialogTitle="Are you sure you want to remove this assignment?"
                assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
        </div>
    );
}