import { Link, useNavigate } from 'react-router-dom';
import {createFetchEvent} from '../../utils/http.js';
import { useMutation} from '@tanstack/react-query';

import {queryClient} from '../../utils/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: createFetchEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events'], exact: true});
      navigate('/events');
    }
  });

  function handleSubmit(formData) {
    mutate({event: formData});
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && (<p>Creating event...</p>)}
        {!isPending && (
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title={'Failed to create event'}
          message={error?.info?.message || 'An error occurred while creating the event'}
        />)
      }
    </Modal>
  );
}
