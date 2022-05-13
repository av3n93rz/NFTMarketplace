import type { StatusBarStyle } from 'react-native';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import type { FC } from 'react';
import React from 'react';

type FocusedStatusBarProps = {
  background?: string;
  translucent?: boolean;
  barStyle?: StatusBarStyle;
};

export const FocusedStatusBar: FC<FocusedStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};
