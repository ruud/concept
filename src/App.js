import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import {AuthProvider} from './context/auth'
import {WorkspaceProvider} from './context/workspace'

import Workspace from './components/Workspace';

function App() {
  return (
    <>
      <CssBaseline/>
      <AuthProvider>
        <div className="App">
          <WorkspaceProvider>
            <Workspace/>
          </WorkspaceProvider>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
