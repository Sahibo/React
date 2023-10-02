import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';

export function Modal(props) {
  return ReactDOM.createPortal(props.children, document.getElementById('modal-root'))
}

function App() {
  const [isOpen, setOpen] = useState(false)

  const openModalWindow = () => {
    setOpen(true)
  }

  const closeModalWindow = () => {
    setOpen(false)
  }

  return (

    <div className="App">
      <button onClick={openModalWindow}>Open</button>
      {isOpen && (
        <Modal>
          <div className="modal-overlay" onClick={closeModalWindow}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h1>Hello World</h1>
              <button className="close-button" onClick={closeModalWindow}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;