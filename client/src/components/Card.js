import styled from "styled-components";

const StyledForm = styled.div`
  width:557px;
  margin:179px 0 0 147px;

  @media (max-width: 740px) {
    margin:63px 0 0 22px;
    width:100%;
  }

  @media (max-width: 400px) {
    width: unset
  }
`;

function Card(props) {
  return <StyledForm>{props.children}</StyledForm>;
}

export default Card;