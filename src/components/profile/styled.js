import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 8.4rem;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 12.5rem;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  width: 56.25rem;
  div {
    margin: 2rem 6rem;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }

  div h4 {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #6238E2;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 140px;
  margin-right:4rem;
`;
