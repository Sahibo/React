import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

function App() {
  const [isDataInputModalVisible, setDataInputModalVisible] = useState(false);
  const [isDataSubmittedModalVisible, setDataSubmittedModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const showDataInputModal = () => {
    setDataInputModalVisible(true);
  };

  const handleDataInputOk = () => {
    setDataInputModalVisible(false);

    setDataSubmittedModalVisible(true);
  };

  const handleDataSubmittedOk = () => {
    setDataSubmittedModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDataInputModal}>
        Open
      </Button>

      <Modal
        title="Enter info"
        visible={isDataInputModalVisible}
        onOk={handleDataInputOk}
        onCancel={() => setDataInputModalVisible(false)}
      >
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button type="primary" onClick={handleDataInputOk}>
            Submit
          </Button>
        </div>
      </Modal>

      <Modal
        title="Entered data"
        visible={isDataSubmittedModalVisible}
        onOk={handleDataSubmittedOk}
        onCancel={() => setDataSubmittedModalVisible(false)}
      >
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </Modal>
    </div>
  );
}

export default App;