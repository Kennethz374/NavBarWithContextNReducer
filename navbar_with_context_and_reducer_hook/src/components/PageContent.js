import React from 'react';
import { red } from '@material-ui/core/colors';

export default function PageContent(props) {
  const styles = {
    backgroundColor: "red",
    height: '100vh',
    width: '100vw'
  }
  console.log(props.children)
  return (
    <div style={styles}>{props.children}</div>
  )
}