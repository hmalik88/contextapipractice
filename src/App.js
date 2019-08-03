import React from 'react';
import ButtonA from './components/ButtonA.component'
import ButtonB from './components/ButtonB.component'
import { SharedSnackbarProvider } from './SharedSnackbar.context'

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}

class App extends React.Component {

  render() {
    return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
      );
  }
}

export default App;
