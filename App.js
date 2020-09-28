import React from 'react';

import { MainLayout } from './src/MainLayout';
import { ScreenState, TodoState } from './src/context/screen/ScreenState';

export default function App() {

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}