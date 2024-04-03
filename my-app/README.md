# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅
- 1. react 공식 문서를 통해 리액트 개발환경 세팅합니다.
```
npx create-react-app my-app
cd my-app
npm start
```
- 2. react-helmet, react-helmet-async 등의 패키지를 설치해 줍니다.
```
yarn add react-helmet
yarn add react-helmet-async
```
- 3. src/index.js 부분에 Meta Tags를 수정 및 추가해줍니다.
- 4. favicon을 원하는 이미지로 favicon generator를 통해 다운로드해줍니다. (https://www.favicon-generator.org/)
- 5. public/favicon 폴더를 만든 후, index.html의 경로를 수정하여 favicon을 세팅해줍니다.


## Favicon 세팅 <--- TODO
### 각 파일의 역할
- `favicon.ico` : 패비콘이란 인터넷 웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘이다.
- `site.webmanifest` : 프로그레시브 웹 앱(PWA)라고 칭하는 웹 기술 모음집의 일부로서, 앱 스토어를 거치지 않고 장치의 홈 화면에 설치할 수 있는 웹사이트를 구성합니다.
- `android-chrome-192x192.png`: 안드로이드 기기에서 사용하는 크롬 브라우저 아이콘.
- `apple-touch-icon.png`: iOS 기기에서 사용하는 터치 아이콘.
- <meta name="apple-mobile-web-app-title"> : 등록되는 웹 사이트의 이름을 지정
- <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>  : 등록되는 웹 사이트의 아이콘을 지정, 
이 아이콘은 기본적으로 아이폰이 제공하는 UI 처리( 모서리를 둥글게 하고 반원형의 밝은 부분을 추가해 주는 것) 가 된다. 원하지 않을 때는 rel 속성의 값을 apple-touch-icon-precomposed 라는 이름으로 지정하여 사용하면 된다.
- <link rel="apple-touch-startup-image" href="/startup.png">  : 화면이 로딩될 때 스타트업 이미지를 지정
아이폰 기본 앱에 들어있는 Default.png 와 비슷한 역할이다.
단, 이미지의 크기가 정확히 맞아야 한다. 
아이폰은 320×460 , 아이폰4는 640×920 , 아이패드는 768×1004 로 정확히 맞춰야만 제대로 화면에 표시된다.
- <meta name="apple-mobile-web-app-capable" content="yes" />  : Web App으로 선언하여 브라우저의 UI ( URL 바 ) 를 안 보이도록 할 수 있다.
즉, Web App 이 마치 일반 Native App 처럼 화면 전체 
( 최상단 상태바 20px 제외) 를 활용할 수 있도록 한다.
- <meta name="apple-mobile-web-app-status-bar-style" content="black" />  : 상태바의 색상을 지정
바탕화면이 검정색인 어플리케이션의 경우 상태바만 회색인 이질감을 줄이기 위해 사용한다.
3가지 스타일 : default (회색) , black , black-translucent ( 반투명 )

참고 출처 : https://developers.google.com/web/fundamentals/design-and-ux/browser-customization?hl=ko  
애플 공식 문서: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW8
안드로이드 공식 문서 : https://developer.android.com/guide/topics/manifest/meta-data-element?hl=ko
HTML5shiv : https://github.com/aFarkas/html5shiv
네이버 웹표준 : https://nuli.navercorp.com/
W3C 웹표준: https://validator.w3.org/


## SEO 스코어 분석

- https://wave.webaim.org/
- https://www.seobility.net/en/seocheck/

### 개선점
- 스코어 개선을 위해 필요한 작업 1
- 스코어 개선을 위해 필요한 내용 2
- 스코어 개선을 위해 필요한 내용 3


___________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
