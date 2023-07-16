import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css'
import { CSSTransition } from 'react-transition-group'

const Modal = (props) => {
  const duration = 700
  // const defaultStyle = {
    // transition: `all ${duration}ms ease-in-out`, //'opacity visibility' if more then one property use 'all'
    // opacity: 0,
    // visibility: 'hidden',
  // }
  // const transitionStyles = {
    // entering: { opacity: 1, visibility: 'visible'},
    // entered:  { opacity: 1, visibility: 'visible'},
    // exiting:  { opacity: 0, visibility: 'hidden' },
    // exited:  { opacity: 0, visibility: 'hidden' },
  // }
  return (
    <CSSTransition
      in={props.showModal}
      timeout={duration}
      unmountOnExit
      onEnter={() => props.setBtnShow(false) }
      onExited={() => props.setBtnShow(true)}
      classNames='modal' //its from CSSTransition
    >
      {/* props.showModal have a responsibility to show the modal or not */}
        {/* { state => ( */}
        <div className="modal mt-5 d-block"
              // style={{
              // ...defaultStyle,
              // ...transitionStyles[state]
              // }}
        >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Typical modal window</h5>
                  <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>Modal body content</p>
                </div>
                <div className="modal-footer">
                  <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                  <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
      </CSSTransition>
    )
}

function CssTransition() {
  const [showModal, setShowModal] = useState(false)
  const [btnShow, setBtnShow] = useState(true)

    return (
        <Container>
        <Modal onClose={setShowModal}
          showModal={showModal}
          setBtnShow={setBtnShow}
        />
        {/* library controls */}
        { btnShow ? <button 
          type="button" 
          className="btn btn-warning mt-5"
          onClick={() => {
            console.log("Modal")
            return setShowModal(true)
          }}>Open Modal</button> : null
        }
        </Container>
    );
}

export default CssTransition;
