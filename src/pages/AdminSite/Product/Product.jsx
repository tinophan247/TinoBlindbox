import { Button } from "@mui/material";
import AdminLayout from "../../../component/AdminLayout";
import AddIcon from "@mui/icons-material/Add";
import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import { useState } from "react";

function Product() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    img: "",
    stock: "",
    oldPrice: "",
    newPrice: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setProduct({
      img: "",
      name: "",
      desc: "",
      price: "",
      type: "",
    });
  };

  return (
    <AdminLayout>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h1 className="text-xl font-semibold">Quản lý sản phẩm</h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: 600,
              marginTop: 2,
            }}
            startIcon={<AddIcon />}
            className="w-full sm:w-auto mt-4 sm:mt-0 px-4"
            onClick={handleOpen}
          >
            Thêm sản phẩm
          </Button>
        </div>
        <div className="mt-10">
          <ProductTable />
        </div>
      </div>
      {open && (
        <ProductModal data={product} isOpen={open} handleClose={handleClose} />
      )}
    </AdminLayout>
  );
}

export default Product;
