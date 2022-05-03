import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import './Modal.scss';
import { ReactComponent as Close } from '../../Assets/Images/close.svg';
import {ReactComponent as Success} from '../../Assets/Images/success.svg'


interface Ibutton {
   open: boolean;
    id: number;
   handleClose: () => void;
}
// interface IModal{
//     send:any, 
//     pending: HTMLDivElement, 
//     response:HTMLDivElement, 
// } 
export default function ModalWindow({open,id, handleClose}:Ibutton) {
    const [amount, setAmount] = React.useState<number>(1);
    const [name, setName] = React.useState<string>('');
    const [tel, setTel] = React.useState<string>('');
    const [type, setType] = React.useState<string>('send');

    const handleOrder = (e:any): void=>{
        e.preventDefault();
        console.log(name, tel, id, amount);
        setType('pending');
        fetch("https://matrassesapp.herokuapp.com/api/order", {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, 
                phone_number: tel,
                amount, 
                productId:id
            })
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((error)=>{
            setType('success');
            console.log(error);
            
        })
       
        
        
    }
    const modal = {
      send: (
        <div className="modal">
          <button onClick={handleClose} className="modal__close">
            <Close />
          </button>
          <h3 className="modal__title">Buyurtma qilish</h3>
          <form className="modal__form" onSubmit={handleOrder}>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="modal__input"
              onChange={(e: any): void => {
                setName(e.target.value);
                
              }}
             required
            />
            <label htmlFor="phone__num" className="modal__label">
              <span className="modal__label--num">+998</span>
              <input
                type="tel"
                id="phone__num"
                className="modal__input--tel"
                placeholder="Raqamingizni yozing"
                onChange={(e: any): void => {
                  setTel("+998 " + e.target.value);
                }}
                required
              />
            </label>

            <span className="modal__amount">Miqdorni Tanlang</span>
            <div className="modal__amount--wrapper">
              <button
                type="button"
                className="modal__minus"
                onClick={() => {
                  setAmount(amount > 1 ? amount - 1 : amount);
                }}
              >
                -
              </button>
              <div className="modal__amount--value">{amount}</div>
              <button
                className="modal__plus"
                type="button"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              >
                +
              </button>
            </div>
          <button type="submit" className="modal__submit">
            Yuborish
          </button>
          </form>
        </div>
      ),
      pending: (
        <div className="modal modal__pending">
          <button onClick={handleClose} className="modal__close">
            <Close />
          </button>
          <h3 className="modal__title">Yuborilmoqda...</h3>
          <div className="modal__pending__spin">
            <div className="modal__pending--inner"></div>
          </div>
        </div>
      ),
      success: (
        <div className="modal modal__success">
          <button onClick={handleClose} className="modal__close">
            <Close />
          </button>
          <h3 className="modal__title modal__success--title">
            Arizangiz muvaffaqiyatli yuborildi
          </h3>
          <Success className="modal__success--img" />
          <p className="modal__success--text">
            Tez orada operatorlarimiz siz bilan bog’lanishadi
          </p>
          <button
            className="modal__success--btn"
            type="button"
            onClick={()=>{
                handleClose();
                setType('send')
            }}
          >
            Ok
          </button>
        </div>
      ),
      fail: (
        <div className="modal modal__fail">
          <button onClick={handleClose} className="modal__close">
            <Close />
          </button>
          <h3 className="modal__title modal__fail--title">
            Xaolik yuz berdi, iltimos birozdan so'ng urinib ko'ring!{" "}
          </h3>
          <button
            className="modal__success--btn"
            type="button"
            onClick={()=>{
                handleClose();
                setType('send')
            }}
          >
            Ok
          </button>
        </div>
      ),
    };
    
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {type === "send"?modal.send:type==="pending"?modal.pending:type==="success"?modal.success:modal.fail}
        </Fade>
      </Modal>
    </div>
  );
}
