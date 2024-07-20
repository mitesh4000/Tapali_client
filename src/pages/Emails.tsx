import {
  CheckmarkOutline,
  CloseOutline,
  Edit,
  TrashCan,
} from "@carbon/icons-react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TextInput,
} from "@carbon/react";
import React, { useState } from "react";
import data from "../Data/emails_data.json";
import DeleteModal from "../components/DaleteModal";
function Emails() {
  interface Istate {
    selectedIndex: Number;
    purpose: String;
    deleteModalStatus: boolean;
  }

  const [state, setState] = useState({
    selectedIndex: -1,
    purpose: "edit",
    deleteModalStatus: false,
  });

  const headers = [
    "id",
    "email",
    "host",
    "Port_number",
    "encryption_method",
    "Actions",
  ];

  const closeModal = () => {
    setState({ ...state, deleteModalStatus: false });
  };

  return (
    <React.Fragment>
      <DeleteModal
        modalClose={closeModal}
        modalopen={state.deleteModalStatus}
      ></DeleteModal>
      <TableContainer title="Sender Emails" description="email configrations">
        <Table size="lg" useZebraStyles={false} aria-label="sample table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeader id={"id" + index} key={header}>
                  {header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(1, 5).map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {state.selectedIndex != index ? (
                    item.email
                  ) : (
                    <TextInput
                      type="text"
                      value={item.email}
                      labelText=""
                      id={"ip-1"}
                    ></TextInput>
                  )}
                </TableCell>
                <TableCell>
                  {state.selectedIndex != index ? (
                    item.host
                  ) : (
                    <TextInput
                      type="text"
                      value={item.host}
                      labelText=""
                      id={"ip-1"}
                    ></TextInput>
                  )}
                </TableCell>
                <TableCell>
                  {state.selectedIndex != index ? (
                    item.port_number
                  ) : (
                    <TextInput
                      type="text"
                      value={item.port_number}
                      labelText=""
                      id={"ip-1"}
                    ></TextInput>
                  )}
                </TableCell>
                <TableCell>
                  {state.selectedIndex != index ? (
                    item.encryption_method
                  ) : (
                    <TextInput
                      type="text"
                      value={item.encryption_method}
                      labelText=""
                      id={"ip-1"}
                    ></TextInput>
                  )}
                </TableCell>
                {state.selectedIndex !== index ? (
                  <TableCell>
                    <IconButton
                      kind="ghost"
                      color="read"
                      onClick={() =>
                        setState({ ...state, selectedIndex: index })
                      }
                      label={"edit"}
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      kind="ghost"
                      label={"delete"}
                      onClick={() =>
                        setState({ ...state, deleteModalStatus: true })
                      }
                    >
                      <TrashCan />
                    </IconButton>
                  </TableCell>
                ) : (
                  <TableCell>
                    <IconButton kind="ghost" color="read" label={"save"}>
                      <CheckmarkOutline />
                    </IconButton>

                    <IconButton
                      kind="ghost"
                      label={"cancel"}
                      onClick={() => setState({ ...state, selectedIndex: -1 })}
                    >
                      <CloseOutline />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default Emails;
function setPerson(arg0: {
  deleteModalStatus: boolean;
  selectedIndex: number;
  purpose: string;
}) {
  throw new Error("Function not implemented.");
}
