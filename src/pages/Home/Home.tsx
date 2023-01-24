import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setAccessToken } from 'redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = (): void => {
    dispatch(setAccessToken('asdf'));
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
