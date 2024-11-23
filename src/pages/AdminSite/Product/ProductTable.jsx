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
import moment from "moment";

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
  const Bb3List = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/luckycat.webp?alt=media&token=7aef5913-2f59-451b-a070-c12bf9064c51",
      brand: "Baby three",
      name: "Lucky cat",
      createdDate: "2024-11-23T05:21:26.490Z",
      stock: 0,
      oldPrice: 290000,
      newPrice: 280000,
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/macaron.jpg?alt=media&token=e1d1d170-0808-412a-a3cf-8d66e6d0afc2",
      brand: "Baby three",
      name: "Macaroon",
      createdDate: "2024-11-23T05:21:26.490Z",
      stock: 3,
      oldPrice: 280000,
      newPrice: 260000,
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/uploadingfile-73c77.appspot.com/o/chineseZodiac.jpg?alt=media&token=d72cf246-f527-4ad5-b973-966c9c7f95c6",
      brand: "Baby three",
      name: "12 Con giáp",
      createdDate: "2024-11-23T05:21:26.490Z",
      stock: 6,
      oldPrice: 300000,
      newPrice: 270000,
    },
  ];
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
          {Bb3List.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-10 rounded-sm"
                    src={item.img}
                    alt={item.img}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold text-sm">Baby three</p>
                    <p className="text-gray-500 text-xs">{item.name}</p>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className="flex flex-col justify-between">
                  <p className="font-medium text-sm">{moment(item.createdDate).format('DD/MM/YYYY')}</p>
                  <p className="text-xs text-gray-500">{moment(item.createdDate).format('LT')}</p>
                </div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.stock}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.oldPrice.toLocaleString()} đ
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.newPrice.toLocaleString()} đ
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Chip label={item.stock > 0 ? "Còn hàng" : "Hết hàng"} color={item.stock > 0 ? "success" : "default"} />
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
