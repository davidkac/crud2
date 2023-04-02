// import './App.css';
import './index.css';
import MainNavigation from './components/Navigation/MainNavigation';
import { Fragment } from 'react';
import { UserContextProvider } from './store/user-context';


function App() {
  return (
    <>
    <UserContextProvider>
    <div className="App">
        <MainNavigation />
    </div>
    </UserContextProvider>
    </>
  );
}

export default App;
