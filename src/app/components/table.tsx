import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Tooltip,
} from "@mui/material";
interface TableRowData {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  score: number;
}
import EditIcon from "@mui/icons-material/Edit";
interface TableComponentProps {
  data: TableRowData[];
  onEdit: (row: TableRowData) => void;
}

const TableComponent = ({ data, onEdit }: TableComponentProps) => {
  const formatTooltip = (text: string) => {
    return text === "M" ? "Male" : text === "F" ? "Female" : "Unknown";
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell align="right">
                <Button onClick={() => onEdit(row)} size="small">
                  <EditIcon sx={{ color: "black" }} />
                </Button>
              </TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>

              <TableCell align="right">
                <Tooltip placement="bottom" title={formatTooltip(row.gender)}>
                  <span>{row.gender}</span>
                </Tooltip>
              </TableCell>

              <TableCell align="right">
                {Number(row.score).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
