import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../features/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    }
])

export const AppRouter = () => {
  return <RouterProvider router={router}/>
}
