import { Container } from '@mui/material';
import React from 'react';
import './Interested.scss';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import axios from 'axios';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Interested(): any {
  //snackbar
    const [open, setOpen] = React.useState<boolean>(false);
    const [sent, setSent] = React.useState<boolean>(false);
    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    };




  const handleNumber = (e: any): void => {
    e.preventDefault();
    const { phone_number } = e.target.elements;
    console.log("+998" + phone_number.value);
    axios({
      method: "POST",
      url: "https://matrassesapp.herokuapp.com/api/contact",
      data: {
        phone_number: phone_number.value
      }
    }).then(res => {
      console.log(res);
      if(res.status===200){
        handleClick();
        setSent(true)
      }
    });
  };
    return (
      <div className="interest">
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Tez orada aloqaga chiqamiz!
            </Alert>
          </Snackbar>
          <Container maxWidth="xl">
            <div
              className={`interest__wrapper ${
                sent ? "interest__disabled" : ""
              }`}
            >
              <div className="interest__content">
                <h2 className="interest__title">Sizni qiziqtirdimi?</h2>
                <p className="interest__text">
                  Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
                </p>
              </div>
              <form className="interest__form" onSubmit={handleNumber}>
                <label htmlFor="tel" className="interest__label">
                  +998
                  <input
                    type="text"
                    id="tel"
                    className="interest__input"
                    placeholder="Raqamingizni yozing"
                    name="phone_number"
                  />
                </label>
                <button className="interest__btn" type="submit">
                  Yuborish{" "}
                </button>
              </form>
            </div>
            <div
              className={`interest__sent ${
                !sent ? "interest__disabled" : ""
              }`}
            >
              <h2 className="interest__sent--title">
                Arizangiz muvaffaqiyatli qabul qilindi ✅
              </h2>
              <p className="interest__sent--text">
                Siz bilan tez orada bog’lanamiz 😊
              </p>
            </div>
          </Container>
        </Stack>
      </div>
    );
}