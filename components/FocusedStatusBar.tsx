import { StyleSheet, StatusBar, StatusBarStyle } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React, { FC } from 'react'

type FocusedStatusBarProps = {
  background?: string;
  translucent?: boolean;
  barStyle?: StatusBarStyle;
}

const FocusedStatusBar: FC<FocusedStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}/> : null;
}

export default FocusedStatusBar

const styles = StyleSheet.create({})