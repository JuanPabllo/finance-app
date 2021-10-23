import ReactLoading from 'react-loading';

import { ContainerButton } from './styles';

import { ButtonProps } from './interfaces';

export default function Button({ children, uppercase, loading }: ButtonProps) {
  return (
    <>
      <ContainerButton className={uppercase ? 'text-upper' : ''}>
        {loading ? (
          <ReactLoading width="35px" height="35px" type="spin" color="#fff" />
        ) : (
          children
        )}
      </ContainerButton>
    </>
  );
}
