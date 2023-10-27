import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  // const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  // const visibleContacts = contacts?.filter(contact =>
  //   contact?.name?.toLowerCase().includes(filter.toLowerCase())
  // );
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name
        .toLowerCase()
        .trim()
        .includes(state.filter.toLowerCase().trim())
    );
  });
  const handleDelete = id => {
    dispatch(deleteContact(id))
  };

  return (
    <ul>
      {contacts.map(item => (
        <ContactItem key={item.id}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <button
            type='button'
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delet
          </button>
         </ContactItem>
         ))}
      {/* /* {contacts?.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <span>{name}</span>
          <span>{number}</span>

          <FaTrashAlt
            style={{
              cursor: 'pointer',
              color: 'crimson',
            }}
            onClick={() => {
              handleDelete(id);
            }}
          />
        </ContactItem>
      ))} */ * /}

    </ul>
  );
};

export default ContactsList;
