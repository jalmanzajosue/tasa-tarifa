import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>}/>

        <Route path='/*' element={<JournalRoutes/>}/>
    
    </Routes>
  )
}
