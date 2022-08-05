import { useRef } from 'react';
import { useState } from 'react';
import Card from './Card.js';
import Title from './Title';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledImage } from './Image.js';
import Cloud2 from '../image/design/cloud-2.svg';
import Cloud3 from '../image/design/cloud-3.svg';
import Spinner from './Spinner.js';

const StyledDestination = styled.div`
  margin-bottom: ${(props) => props.destination || '8px'};
`;

const StyledInput = styled.input`
  padding: 31px 0px ${(props) => props.padding || '30px'} 46px;
  width: 100%;
  height: ${(props) => props.height || '93px'};
  margin-top: ${(props) => props.margin};
  border-radius: 10px;
  border: 1px solid #dcdcdc;

  &::-webkit-input-placeholder {
    color: black;
    line-height: 32px;
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  width: 218px;
  font-size: 18px;
  text-align: center;
  color: white;
  border-radius: 500px;
  border: none;
  background-color: #fad34f;
  padding: 27px 0 28px 0;
`;

function FeedbackForm() {
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef();
  const emailnputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailnputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    const fetchUser = async () => {
      setLoading(true);
     await fetch(`http://localhost:3001/users`, {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        },
        method: 'POST',
        body: JSON.stringify(userData)
      }).catch((error)=>{
        toast.error('error');
        setLoading(false);
        return
      })
        setLoading(false);
        toast.success('User message saved!');
    };
    fetchUser();
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card>
      <ToastContainer />
      <Title />
      <form className="form" onSubmit={submitHandler}>
        <StyledDestination>
          <StyledInput
            margin={'30px'}
            type="text"
            required
            id="name"
            ref={nameInputRef}
            placeholder="Your name*"
          />
        </StyledDestination>
        <StyledDestination>
          <StyledInput
            type="email"
            required
            id="email"
            ref={emailnputRef}
            placeholder="Your email*"
          />
        </StyledDestination>
        <StyledDestination destination={'23px'}>
          <StyledInput
            padding={'126px'}
            height={'189px'}
            id="description"
            required
            rows="5"
            ref={messageInputRef}
            placeholder="Your message*"
          />
        </StyledDestination>
        <div>
          <StyledButton>Add Meetup</StyledButton>
          <StyledImage
            src={Cloud2}
            alt="Cloud2"
            top={'43%'}
            display={'none'}
            index={'-1'}
          />
          <StyledImage
            src={Cloud3}
            alt="Cloud3"
            top={'49%'}
            left={'5%'}
            index={'-1'}
          />
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
