import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import  fetchEvent, {updateEvent}  from '../../utils/http.js'

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams()

  const { data } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
    staleTime: 10000
  })

  const {mutate} = useMutation({
    mutationKey: ['event', params.id],
    mutationFn: ({event}) => updateEvent({event, id: params.id }),
    onSuccess: () => {
      navigate('../')
    }
  })

  function handleSubmit(formData) {
    mutate({id: params.id, event: formData})
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
