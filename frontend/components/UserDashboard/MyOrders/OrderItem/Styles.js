import styled from '@emotion/styled';
import { Button, TableCell, TableContainer, Typography } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  cursor: 'pointer',
  border: `2px solid ${theme.palette.background.default}`,
  borderRadius: '5px',
  '&:hover': {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontWeight: 600,
}));