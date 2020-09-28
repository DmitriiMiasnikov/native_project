import React from 'react';

import { MainLayout } from './src/MainLayout';
import { ScreenState } from './src/context/screen/ScreenState';
import { TodoState } from './src/context/todo/TodoState'

export default function App() {

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}