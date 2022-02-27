import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import TopBar from "components/topbar";
import {CurrentUserProvider} from "contexts/currentUser";

const App = () => {
  return (
      <CurrentUserProvider>
        <BrowserRouter>
          <TopBar/>
          <Routes/>
        </BrowserRouter>
      </CurrentUserProvider>
  );
};

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById( 'root' )
);
