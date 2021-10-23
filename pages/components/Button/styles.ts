import styled from 'styled-components';

export const ContainerButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: 305px;
  height: 54px;

  background-color: #6f6cd9;
  border-radius: 4px;
  border: none;
  color: #fff;
  transition: 0.3s ease;

  font-weight: bold;
  font-size: 14px;

  &:hover {
    background-color: #615fb0;
  }

  &.text-upper {
    text-transform: uppercase;
  }
`;
