import React from 'react';
import {StyleSheet} from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';

export default function CirclePieces() {
  return (
    <QRCodeStyled
      data={'Styling Pieces'}
      style={{backgroundColor: 'white', borderRadius: 16, overflow: 'hidden'}}
      padding={15}
      pieceSize={15}
      pieceBorderRadius={5}
      color={'#F57F17'}
    />
  );
}
