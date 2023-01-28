import { experimentalStyled as styled } from '@mui/material/styles';
import { AppBar, Container, Card } from '@mui/material';

const AppBarHeight = 64;

export const AppBarStyled = styled(AppBar)({
  height: AppBarHeight
});

export const AppBarContainerStyled = styled(Container)({
  height: '100%',
  wieght: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const BodyContainerStyled = styled(Container)({
  paddingTop: 24 + AppBarHeight
});

export const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  margin: theme.spacing(0, 'auto')
}));
