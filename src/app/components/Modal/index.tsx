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
import { Fade, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useControlSlice } from 'app/slices/controlSlice';
import { selectControl } from 'app/slices/controlSlice/selectors';
import useWindowDimensions from 'utils/useWindowDimensions';
import TextTransition, { presets } from 'react-text-transition';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from '../Title';
import { P } from '../P';
import { TextButton } from '../TextButton';
import { Container } from '../Styled';

interface Props {
  open: boolean;
  onClose: any;
  children?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dialogClassName?: string;
  size?: 'sm' | 'lg' | 'xl' | undefined;
  data: any;
}

export function Modal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  // const [show, setShow] = React.useState(false)
  // function handleClose(){
  //   setShow(false)
  // }

  // ModalControl
  const dispatch = useDispatch();
  const control = useSelector(selectControl);
  const { actions: controlAction } = useControlSlice();
  const detailModalState = control.detailModalState;
  const detailShow = detailModalState.isOpen;
  const detailData = props.data;

  const supportersList = ['soh22_archive', 'yeahwon__zip'];
  function onClickSupporter(value) {
    window.open('https://www.instagram.com/' + value, '_blank');
  }

  const designer =
    detailData.modeler >= 0 ? (
      <Supporter
        onClick={() => {
          onClickSupporter(supportersList[detailData.modeler]);
        }}
      >
        designed by @{supportersList[detailData.modeler]}
      </Supporter>
    ) : null;

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
        <Div>
          <Title>{detailData.title}</Title>
          {detailData.image ? <ModalImage src={detailData.image} /> : null}
          <P>{detailData.body}</P>
          {props.children}
          {detailData.url ? (
            <Button
              onClick={() => {
                window.open(detailData.url, '_blank');
              }}
            >
              Go Detail Site
            </Button>
          ) : null}
          {designer}
        </Div>
      </Fade>
    </MU_Modal>
  );
}

const Div = styled(Container)`
  width: 80%;
  height: 80%;
  padding: 5%;
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

const Supporter = styled(P)`
  line-height: 1.5;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 30%;
  height: 30%;
  aspect-ratio: 1;
  object-fit: contain;
`;
