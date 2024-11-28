import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import TextFields from "../../../component/TextFields/TextFields";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({
  isOpen = false,
  handleClose,
  data = {
    name: "",
    img: "",
    stock: "",
    oldPrice: "",
    newPrice: 0,
  },
}) {
  const validationSchema = yup.object({
    name: yup.string().required("Vui lòng nhập tên sản phẩm"),
    img: yup.string().required("Vui lòng nhập hình ảnh"),
    stock: yup.string().required("Vui lòng nhập số lượng kho"),
    oldPrice: yup.string().required("Vui lòng nhập giá"),
    newPrice: yup.string().required("Vui lòng nhập giá mới"),
  });

  const formik = useFormik({
    initialValues: {
      name: data.name,
      img: data.img,
      stock: data.stock,
      oldPrice: data.oldPrice,
      newPrice: data.newPrice,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const newData = {
        id: uuidv4(),
        name: values.name,
        img: values.img,
        stock: values.stock,
        oldPrice: +values.oldPrice,
        newPrice: +values.newPrice,
        createdDate: new Date(),
      };
      console.log(newData);
      handleClose();
    },
  });

  const handleChange = (field, event) => {
    let value = event.target.value;
  
    if (/^[0-9]*\.?[0-9]*$/.test(value) || value === "") {
      formik.setFieldValue(field, value);
    }
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <div />
            <h1 className="font-bold text-2xl">Tạo mới</h1>
            <CloseIcon
              onClick={handleClose}
              sx={{ fontSize: "30px", cursor: "pointer" }}
            />
          </div>
          <div className="flex justify-center items-center">
            <form className="space-y-2" onSubmit={formik.handleSubmit}>
              <TextFields
                name="Tên sản phẩm"
                placeholder="Vui lòng nhập tên sản phẩm"
                width="100%"
                value={formik.values.name}
                onChange={formik.handleChange("name")}
                required={true}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
              />
              <TextFields
                name="Hình ảnh"
                placeholder="Vui lòng nhập hình ảnh"
                width="100%"
                value={formik.values.img}
                onChange={formik.handleChange("img")}
                required={true}
                helperText={formik.touched.img && formik.errors.img}
                error={formik.touched.img && Boolean(formik.errors.img)}
              />
              <TextFields
                name="Kho hàng"
                type="number"
                placeholder="Vui lòng nhập kho hàng"
                width="100%" // Make width 100% for mobile responsiveness
                value={formik.values.stock}
                onChange={(e) => handleChange("stock", e)}
                required={true}
                helperText={formik.touched.stock && formik.errors.stock}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
              />
              <TextFields
                name="Giá sản phẩm"
                type="number"
                placeholder="Vui lòng nhập giá"
                width="100%"
                value={formik.values.oldPrice}
                onChange={(e) => handleChange("oldPrice", e)}
                required={true}
                helperText={formik.touched.oldPrice && formik.errors.oldPrice}
                error={
                  formik.touched.oldPrice && Boolean(formik.errors.oldPrice)
                }
              />
              <TextFields
                name="Giá mới sản phẩm"
                type="number"
                placeholder="Vui lòng nhập giá mới"
                width="100%" // Make width 100% for mobile responsiveness
                value={formik.values.newPrice}
                onChange={(e) => handleChange("newPrice", e)}
                required={true}
                helperText={formik.touched.newPrice && formik.errors.newPrice}
                error={
                  formik.touched.newPrice && Boolean(formik.errors.newPrice)
                }
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: 600,
                    marginTop: 2,
                    width: "100%",
                    maxWidth: 300,
                  }}
                  className="w-full sm:w-auto mt-4 sm:mt-0 px-4"
                >
                  Tạo sản phẩm
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

ProductModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    stock: PropTypes.string,
    oldPrice: PropTypes.string,
    newPrice: PropTypes.number,
  }),
};
