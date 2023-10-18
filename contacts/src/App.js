import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact, deleteContact } from './store/reducer';
import { useEffect, useState, useRef } from 'react';

function App() {
  let dispatch = useDispatch()
  let contactsArr = useSelector(state => state.contacts.contactsArr)

  let [contactNameInput, setContactNameInput] = useState('')
  let [contactNumberInput, setContactNumberInput] = useState('')
  let [updatedContactNameInput, setUpdatedContactNameInput] = useState('')
  let [updatedContactNumberInput, setUpdatedContactNumberInput] = useState('')
  let [errorMsg, setErrorMsg] = useState('')

  const [selectedContactId, setSelectedContactId] = useState(null);

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  useEffect(() => {
    console.log(contactsArr);
  }, [contactsArr])

  let [nextId, setNextId] = useState(1);

  let contactNameInputRef = useRef(null)
  let contactNumberInputRef = useRef(null)

  let updatedContactNameInputRef = useRef(null)
  let updatedContactNumberInputRef = useRef(null)



  let handleAddContact = (e) => {
    e.preventDefault()

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
    if(!contactNameInput) {
      setErrorMsg('Name can not be empty.');
      return;
    }
    if (!phoneRegex.test(contactNumberInput)) {
      setErrorMsg('Invalid phone number format. Please enter a valid phone number.');
      return;
    }


    let newContact =
    {
      id: nextId,
      name: contactNameInput,
      number: contactNumberInput
    }
    setNextId(nextId + 1)

    dispatch(addContact(newContact))
    setErrorMsg('')
    setContactNameInput('')
    setContactNumberInput('')
  }

  const handleUpdateContact = (id) => {
    
    let updatedContact =
    {
      id: id,
      name: updatedContactNameInput,
      number: updatedContactNumberInput
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if(!updatedContactNameInput) {
      alert('Name can not be empty.');
      return;
    }
    if (!phoneRegex.test(updatedContactNumberInput)) {
      alert('Invalid phone number format. Please enter a valid phone number.');
      return;
    }

    dispatch(updateContact({ id, contact: updatedContact }));

    setUpdatedContactNameInput('')
    setUpdatedContactNumberInput('')
    setSelectedContactId(null)
    setIsUpdateMode(false)
  }

  let handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div>
      <div className="form-group" >
        <input
          ref={contactNameInputRef}
          value={contactNameInput} 
          onChange={(e) => setContactNameInput(e.target.value)}
          className="form-control"
          placeholder="Enter contact name"/>
        <input
          ref={contactNumberInputRef}
          value={contactNumberInput}
          onChange={(e) => setContactNumberInput(e.target.value)}
          className="form-control"
          placeholder="Enter contact number"/>

        <span>{errorMsg}</span>  
      </div>

      <button
        onClick={(e) => handleAddContact(e)}
        style={{ marginTop: '10px', width: '200px' }}
        type="submit"
        className="btn btn-dark">Add contact</button>


      <div className="contacts-list">
        <div>
          <hr></hr>
          {contactsArr.map((contact, id) => (
            <div key={id} className="contact-item">
              <p>Name: {contact.name}</p>
              <p>Number: {contact.number}</p>
              <button
                style={{ marginTop: '10px', marginBottom: '10px', width: '200px' }}
                type="submit"
                className="btn btn-dark"
                onClick={() => {
                  handleDeleteContact()
                }
                }>Delete</button>
              <button
                style={{ marginTop: '10px', marginBottom: '10px', width: '200px' }}
                type="submit"
                className="btn btn-dark"
                onClick={() => {
                  setIsUpdateMode(true)
                  setSelectedContactId(id)
                }
              }>Update</button>
            </div>
            
            ))}
        </div>
        <div>
          <hr></hr>
          {isUpdateMode && (
            <div className="form-group">
            <input
              ref={updatedContactNameInputRef}
              value={updatedContactNameInput}
              onChange={(e) => setUpdatedContactNameInput(e.target.value)}
              className="form-control"
              placeholder="Enter contact name"/>
            
            <input
              ref={updatedContactNumberInputRef}
              value={updatedContactNumberInput}
              onChange={(e) => setUpdatedContactNumberInput(e.target.value)}
              className="form-control"
              placeholder="Enter contact number"/>

            <button
              style={{ marginTop: '10px', marginBottom: '10px', width: '200px' }}
              type="submit"
              className="btn btn-dark"
              onClick={() => handleUpdateContact(selectedContactId)}>
              Submit</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
