import React from 'react';
import { BrowserRouter , Link, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const AppRouter = () => {
    return (
        <BrowserRouter>
         <div>
          <Header />
          <div className="main-content">
           <Link>
            <Route component={BookList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
           </Link>
        </div>
       </div>
     </BrowserRouter>
    );
};

export default AppRouter;