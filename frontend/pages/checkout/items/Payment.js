import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import { StyledContainer } from '../../../components/UserDashboard/Styles';
import { StyledBtn } from './Styles';
import AddCardIcon from '@mui/icons-material/AddCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Payment = () => {
  return (
    <StyledContainer sx={{ marginTop: 1 }}>
      <Typography variant="h3">Choose Payment Method</Typography>
      <StyledBtn>stripe</StyledBtn>
      <Stack direction={'row'} spacing={1} justifyContent="space-between">
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddCardIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          placeholder="card no"
        />
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          placeholder="mm/yy CVC"
        />
      </Stack>
    </StyledContainer>
  );
};

export default Payment;
