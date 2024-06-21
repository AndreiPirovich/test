import React, { useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.scss';
import {CocktailsListPage, Main, NotFound} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <CocktailsListPage /> },
      { path: "cocktails/:id", element: <CocktailsListPage /> },
    ],
  },
]);

function App() {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
