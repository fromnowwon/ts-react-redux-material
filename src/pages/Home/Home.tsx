import { Button, Switch, Typography, CircularProgress } from '@mui/material';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';
import { setThemeMode } from 'redux/slices/settings';

import {
  AppBarContainerStyled,
  AppBarStyled,
  BodyContainerStyled,
  CardStyled
} from './HomeStyles';

const Home: React.FC = () => {
  const {
    auth: { isLoading },
    settings: { themeMode }
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

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <AppBarStyled>
        <AppBarContainerStyled>
          <Typography>TS-REACT-REDUX TOOLKIT-MATERIAL UI</Typography>
          <Switch onChange={handleChangeTheme} />
        </AppBarContainerStyled>
      </AppBarStyled>
      <BodyContainerStyled>
        <CardStyled>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          {isLoading && <CircularProgress size={24} />}
        </CardStyled>
      </BodyContainerStyled>
    </div>
  );
};

export default Home;
