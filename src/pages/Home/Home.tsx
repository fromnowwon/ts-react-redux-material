import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = (): void => {
    void dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  console.log(accessToken);

  return (
    <div>
      Home
      <button onClick={handleLogin}>Login</button>
      {isLoading && 'Loading...'}
    </div>
  );
};

export default Home;
