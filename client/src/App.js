import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import {
  MainComponent,
  NewParticipation,
  ParticipationList,
} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route index element={<NewParticipation />} />
            <Route path="/participation-list" element={<ParticipationList />} />
            <Route path="*" element={<MainComponent />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
