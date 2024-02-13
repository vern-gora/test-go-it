import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Puff } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={
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
        }>
            <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
