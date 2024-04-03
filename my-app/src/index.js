import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import reportWebVitals from './reportWebVitals';

const pageTitle = 'jalee의 React 학습 여정';
const pageDescription = 'React를 처음 배우면서 만든 첫 프로젝트에 대한 내용과 학습 과정을 공유합니다.';
const pageImageURL = '이미지 URL';
const pageURL = '페이지 URL';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImageURL} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImageURL} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
