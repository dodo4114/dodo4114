/**
 *
 * Modal
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import {
  Backdrop,
  createStyles,
  makeStyles,
  Modal as MU_Modal,
  Theme,
} from '@material-ui/core';
import { Fade } from '@mui/material';
interface Props {
  open: boolean;
  onClose: any;
  children?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dialogClassName?: string;
  size?: 'sm' | 'lg' | 'xl' | undefined;
}

export function Modal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  // const [show, setShow] = React.useState(false)
  // function handleClose(){
  //   setShow(false)
  // }

  return (
    <MU_Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      {...props}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Div>{props.children}</Div>
      </Fade>
    </MU_Modal>
  );
}

const Div = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  background-size: cover;
  border-style: none;
  border-radius: 10px;
  /* filter: blur(8px);
    -webkit-filter: blur(8px); */
  outline: none;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'none',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      borderStyle: 'none',
    },
  }),
);
