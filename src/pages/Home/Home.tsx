import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = (): void => {
    login(
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      dispatch
    );
  };

  console.log(auth.accessToken);

  return (
    <div>
      Home
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
