import { Button } from "@mui/material";
import AdminLayout from "../../../component/AdminLayout";
import AddIcon from "@mui/icons-material/Add";

function Product() {
  return (
    <AdminLayout>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start items-center">
          <h1 className="text-xl font-semibold">Quản lý sản phẩm</h1>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", fontWeight: 600, marginTop: 2 }}
            startIcon={<AddIcon />}
            className="w-full sm:w-auto mt-4 sm:mt-0 px-4"
            >
            Thêm sản phẩm
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Product;
