import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthButtonContainer = styled.div`
  border: 2px solid #ccc;
  padding: 8px 1rem;
  border-radius: 8px;
  margin: 8px auto;
  width: min(90vw, 250px);
  text-align: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  .title {
    /* font-weight: 600; */
    font-weight: 350;
    margin:auto;
  }

  &:hover {
    background-color: #212121f3;
  }
`;

const OrSeparatorContainer = styled.div`
  justify-content: center;
  .line {
    width: 125px;
    height: 1.25px;
    background-color: #d0cece;
  }
`;
const OrSeparator = () => {
  return (
    <OrSeparatorContainer className="fl ac g1 m-h-auto al-s-m">
      <div className="line" />
      or
      <div className="line" />
    </OrSeparatorContainer>
  );
};
const AuthButton: FC<{
  title: string;
  className?: string;
  onClick?: () => void;
}> = ({ title, className, onClick }) => {
  return (
    <AuthButtonContainer className={className} onClick={onClick}>
      <div className="title">{title}</div>
    </AuthButtonContainer>
  );
};

const AuthButtons: FC<{
  title1: string;
  actionPath1?: string;
  title2: string;
  actionPath2?: string;
}> = ({ title1, title2, actionPath1, actionPath2 }) => {
  const navigate = useNavigate();
  return (
    <>
      <AuthButton
        title={title1}
        onClick={() => actionPath1 && navigate(actionPath1)}
      />
      <OrSeparator />
      <AuthButton
        title={title2}
        onClick={() => actionPath2 && navigate(actionPath2)}
      />
    </>
  );
};

export { AuthButton };
export default AuthButtons;
