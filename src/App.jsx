import Modal from './modal/Modal';
import { useState } from 'react';

/*자주 쓰는 패턴 (정보 값을 토대로 반복되는 가상 DOM 생성)
	1. return 안쪽에서 {} 생성
	2. 중괄호 안쪽에서 
		{배열state.map((반복데이터, 순서)=>{
			return <JSX>{활용할 값}</JSX>
		})}
*/

export default function App() {
	const [IsOpen, setIsOpen] = useState(false);
	// Color - 이미 생성된 돔에 이벤트 발생(클릭) 시, 해당 버튼에 있는 문자값을 가져와서 실제 h1 색상 값을 변경하기 위한 정보값
	const [Color, setColor] = useState('black');
	// ColorArr - 화면에 동적으로, 해당 이름으로 버튼 명을 생성하기 위한 정보값
	const [ColorArr, setColorArr] = useState(['red', 'orange', 'yellow', 'green', 'blue']);

	return (
		<>
			{ColorArr.map((data, idx) => {
				return (
					<button key={data + idx} onClick={() => setColor(data)}>
						{data}
					</button>
				);
			})}

			<h1 style={{ color: Color }}>부모 컴포넌트</h1>
			<button
				onClick={() => {
					setIsOpen(!IsOpen);
				}}
			>
				{IsOpen ? '모달 닫기' : '모달 열기'}
			</button>
			{IsOpen && <Modal />}
		</>
	);
}
/*
library vs framework

- library (리액트, 제이쿼리 등..) : 자주 쓰는 편의 기능의 문법만 함수 형태로 따로 준비되어 있는 구조라서, 코드의 응용 범위가 넓은 대신 직접 개발자의 역량에 따라서 해당 코드를 조합해야 하기 때문에 난이도가 높음. 

- framework (앵귤러, 뷰, 넥스트 등..) : 모든 시스템 틀을 강제해서 framework만의 고유 문법을 활용해서만 개발이 가능하기 때문에, 개발자의 개입이 적어져서 (할 것이 명확하기 때문에) 난이도는 쉽지만 응용 범위가 적어짐. 

	리액트에서의 hook 개념 (리액트 16버전부터 생긴 개념. 이전까지는 객체지향의 class 기반)
	: 리액트에서 많이 쓰는 기능들을 함수 형태로 모아놓은 기능 모음집. (쉽게 풀어쓰면 리액트 기반의 필수 내장 플러그인)

	리액트 hook의 기본 convention
	- 반드시 함수 이름의 시작은 use 로 시작되어야 함. 
	- return 값을 내보내야 함. 
	- hook은 핸들러 함수 안쪽이나, 또 다른 hook안에서 호출 불가함. 
	- 반드시 컴포넌트 함수의 상위 root단에서만 호출 가능함. 

	리액트에서 가장 많이 쓰이는 기본 hook 3대장
	- useState : 화면의 재렌더링을 담당하는 중요한 정보 값을 담을 그릇을 생성 및 관리
	- useEffect : 해당 컴포넌트의 생명주기 (life cycle) 를 관리하기 위함
	- useRef : 화면의 재렌더링을 유발하지 않으면서 특정 값을 관리하거나, 가상DOM이 아닌 realDOM을 직접 선택해야 할 때.

	CustonHook : 사용자가 필요에 의해서 직접 등록하는 hook 
	- 내장되어 있는 hook이 아니라, 사용자가 직접 만드는 hook. 
	- 규칙은 기존의 hook과 동일함. 
*/
