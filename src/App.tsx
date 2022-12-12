import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from './index';
import { Layout } from './components/Layout';
import Auth from './pages/Auth/Auth';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

interface PropsRouter {
  path: string;
  Component: React.FC<{}>;
}

const App: any = () => {
  // @ts-ignore
  const { user } = useContext(Context);

  console.log(user);

  return (
    <div className="App">
      <Routes>
        {user.isAuth === true ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />,
            <Route path="/admin" element={<Admin />} />,
            <Route path="/basket" element={<Basket />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />,
            <Route path="/:id" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
