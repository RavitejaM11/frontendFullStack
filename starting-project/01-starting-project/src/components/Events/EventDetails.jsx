import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query'; 
import Header from '../Header.jsx';
import {queryClient, fetchEvent, deleteEvent} from '../../utils/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {

  const [isDeleting, setIsDeleting] = useState(false)

  const params  = useParams()
  console.log(params.id)

  const navigate = useNavigate()

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events',params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
  })

  const {mutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
       queryKey: ['events'],
       refetchType: 'none',
       exact: true
      });
      setIsDeleting(false)
      navigate('/events');
    }
  })

  function handleDelete() {
    mutate({id: params.id});
    setIsDeleting(false)
  }

  let content;

  if(isPending) {
    content = <LoadingIndicator/>
  }

  if(isError) {
    content = (
      <ErrorBlock
        title="Failed to find the details"
        message={error.info.message || `Failed to find item with id: ${params.id}`}
        />
    )
  }

  if(data) {
    content = (
      <>
      <header>
          <h1>{data.title}</h1>
          <nav>
           { isDeleting && (<Modal>
              <p>Are you sure you you want to delete the event:</p>
              <div className='button-container'>
              <button 
                className='button button-text'
                onClick={() => setIsDeleting(false)}>Cancel</button>
              <button 
                className='button button-text'
                onClick={handleDelete}>Delete</button>
              </div>
            </Modal>)}
            <button 
              onClick={() => setIsDeleting(true)}
            >Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.date && data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    )
  }



  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
