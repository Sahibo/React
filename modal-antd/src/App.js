import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { Button, List } from 'antd';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [items, setItems] = useState(['Baku', 'Rome', 'Berlin', 'Tokyo', 'Kurdemir']);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <Button type="primary" onClick={openModal}>
        Open
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notes"
      >
        <h2>Cities</h2>
        <List
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button type="danger" onClick={() => deleteItem(index)}>Delete</Button>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
};

export default App;