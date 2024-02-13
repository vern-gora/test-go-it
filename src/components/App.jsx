import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';

const Layout = lazy(() => import('./Layout.jsx'));
const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('./Catalog/Catalog.jsx'));
const Favorite = lazy(() => import('./Favorites/Favorites.jsx'));

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Suspense
        fallback={
          <Puff
            height='100'
            width='100'
            color='#e6533c'
            ariaLabel='line-wave'
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh',
            }}
            wrapperClass=''
            visible={true}
            firstLineColor=''
            middleLineColor=''
            lastLineColor=''
      />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
