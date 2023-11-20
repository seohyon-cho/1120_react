import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
/*
  SSR vs CSR

  SSR : Server Side Rendering
  - 페이지 이동 시마다 일일히 서버 쪽에 출력할 HTML 파일을 요청하는 방식. 
  - 장점 : 초기 로딩 속도가 빠름. 검색엔진에 최적화 (SEO에 좋음.)
  - 단점 : 페이지 이동 시마다 서버 쪽에 요청을 해야되므로 깜빡거리면서 로딩이 되며 페이지가 변경됨. 

  CSR : Client Side Rendering
  - 초기에 빈 HTML 파일을 서버쪽에서 가져오고, 이때 화면에 출력될 모든 데이터를 chunk 단위로 구성된 자바스크립트 파일을 모두 가져옴. 
  - 장점 : 한 번에 모든 페이지 데이터를 미리 다 불러오기 때문에 페이지 변경 요청 시마다, 서버 요청 없이 클라이언트 쪽에서 부드럽게 화면 전환이 가능해져 좋은 사용성을 제공함. 
  - 단점 : 한 번에 모든 데이터를 불러오기 때문에 초기 로딩 속도가 SSR 방식에 비해서 느림. 검색엔진에 최적화되어 있지 않음. 
*/
