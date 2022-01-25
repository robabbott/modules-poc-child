import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'modules-poc-parent';
import PageModule from './components/PageModule';
import AuthenticationHeader from './components/Authentication/AuthenticationHeader';
import AuthenticationContent from './components/Authentication/AuthenticationContent';
import DatabaseHeader from './components/Database/DatabaseHeader';
import DatabaseContent from './components/Database/DatabaseContent';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PageModule
              header={AuthenticationHeader}
              content={AuthenticationContent}
            />
          }
        />
        <Route
          path='authentication'
          element={
            <PageModule
              header={AuthenticationHeader}
              content={AuthenticationContent}
            />
          }
        />
        <Route
          path='database'
          element={
            <PageModule header={DatabaseHeader} content={DatabaseContent} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
