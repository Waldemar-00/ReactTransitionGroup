import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css'
const hiddenStyles = {
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 700ms ease-in-out'
}
const showStyles = {
  opacity: 1,
  visibility: 'visible',
  transition: `all 700ms ease-in-out`
}
const ModalWindow = (props) => {
  return (
        <div className="modal mt-5 d-block" style={props.show ? showStyles :  hiddenStyles}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Typical modal window</h5>
            <button onClick={() => {
              props.setShow(false)
              props.setBtnShow(true)
            }} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>Modal body content</p>
                </div>
                <div className="modal-footer">
            <button onClick={() => {
              props.setShow(false)
              props.setBtnShow(true)
            }} type="button" className="btn btn-secondary">Close</button>
            <button onClick={() => {
              props.setShow(false)
              props.setBtnShow(true)
            }} type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        )
}

function Modal() {
  const [show, setShow] = useState(false)
  const [btnShow, setBtnShow] = useState(true)
  const showBtnStyles = {
    opacity: 1,
    visibility: 'visible',
    transition: 'all 700ms ease-in-out'
  }
  const hiddenBtnStyles = {
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 700ms ease-in-out'
  }
    return (
        <Container>
        <ModalWindow
          show={show}
          setShow={setShow}
          setBtnShow={setBtnShow}
        />
        <button 
          type="button" 
          className="btn btn-warning mt-5"
          style={btnShow ? showBtnStyles : hiddenBtnStyles}
          onClick={() => {
            setShow(true)
            setBtnShow(false)
          }}>Open Modal</button>
        </Container>
    );
}

export default Modal;
