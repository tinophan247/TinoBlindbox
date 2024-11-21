import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";

// Styled TableCell for header and body cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styled TableRow for alternating row styles and removing borders on last row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "5%" }}>ID</StyledTableCell>
            <StyledTableCell sx={{ width: "30%" }} align="left">
              Sản phẩm
            </StyledTableCell>
            <StyledTableCell sx={{ width: "20%" }} align="left">
              Ngày tạo
            </StyledTableCell>
            <StyledTableCell sx={{ width: "5%" }} align="left">
              Kho
            </StyledTableCell>
            <StyledTableCell sx={{ width: "10%" }} align="left">
              Giá
            </StyledTableCell>
            <StyledTableCell sx={{ width: "10%" }} align="left">
              Giá giảm
            </StyledTableCell>
            <StyledTableCell sx={{ width: "10%" }} align="left">
              Trạng thái
            </StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              1
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 rounded-sm"
                  src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/luckycat.webp?alt=media&token=7aef5913-2f59-451b-a070-c12bf9064c51"
                  alt="Image"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <div className="flex flex-col justify-between">
                  <p className="font-semibold text-sm">Baby three</p>
                  <p className="text-gray-500 text-xs">Lucky cat</p>
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              <div className="flex flex-col justify-between">
                <p className="font-medium text-sm">22-11-2024</p>
                <p className="text-xs text-gray-500">2:00 am</p>
              </div>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              10
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              290.000 đ
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              280.000 đ
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              <Chip label="Hết hàng" color="default" />
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="flex gap-1 justify-end">
                <button
                  className="w-8 h-8 rounded-lg bg-emerald-500"
                  style={{ padding: "6px" }}
                >
                  <EditIcon sx={{ fontSize: "20px" }} />
                </button>
                <button
                  className="w-8 h-8 rounded-lg bg-red-500 text-white"
                  style={{ padding: "6px" }}
                >
                  <DeleteIcon sx={{ fontSize: "20px" }} />
                </button>
              </div>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
