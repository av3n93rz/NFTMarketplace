import { StyleSheet, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React, { FC } from 'react'

type FocusedStatusBarProps = {
  background: string
}

const FocusedStatusBar: FC<FocusedStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}/> : null;
}

export default FocusedStatusBar

const styles = StyleSheet.create({})