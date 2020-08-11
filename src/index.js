import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from './commons/components/article/article';

ReactDOM.render(
  <React.StrictMode>
    <div className="homepage">
    {[1,2,1,1,1].map((i,key)=><Article key={key}/>)}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

