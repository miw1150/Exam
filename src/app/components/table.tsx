import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
  Tooltip,
  styled,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

interface StyledTableRowData {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  score: number;
}
import EditIcon from "@mui/icons-material/Edit";
interface TableComponentProps {
  data: StyledTableRowData[];
  onEdit: (row: StyledTableRowData) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#abe7ff",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
}));

const TableComponent = ({ data, onEdit }: TableComponentProps) => {
  const formatTooltip = (text: string) => {
    return text === "M" ? "Male" : text === "F" ? "Female" : "Unknown";
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            <StyledTableCell align="right">First name</StyledTableCell>
            <StyledTableCell align="right">Last name</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Score</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => onEdit(row)} size="small">
                  <EditIcon sx={{ color: "black" }} />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">{row.firstname}</StyledTableCell>
              <StyledTableCell align="right">{row.lastname}</StyledTableCell>

              <StyledTableCell align="right">
                <Tooltip placement="bottom" title={formatTooltip(row.gender)}>
                  <span>{row.gender}</span>
                </Tooltip>
              </StyledTableCell>

              <StyledTableCell align="right">
                {Number(row.score).toFixed(2)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
