import React from 'react';
import Header from '../../modules/header/header';
import Footer from '../../modules/footer/footer';

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="favorites__title">404 Page Not Found</h1>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFoundPage;
