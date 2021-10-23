import type { NextPage } from 'next';

import Button from './components/Button';

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button loading={true}>Botão</Button>
    </>
  );
};

export default Home;
