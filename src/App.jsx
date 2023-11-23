import { useRef } from 'react';
import './App.scss';

export default function App() {
	console.log('render');
	const num = useRef(0);
	const refBox = useRef(null);

	// const minus = () => {
	// 	num.current--;
	// 	console.log(num.current);
	// 	refBox.current.style.transform = `rotate(${num.current * 45}deg)`;
	// };
	// const plus = () => {
	// 	num.current++;
	// 	console.log(num.current);
	// 	refBox.current.style.transform = `rotate(${num.current * 45}deg)`;
	// };

	const rotation = (count) => {
		refBox.current.style.transform = `rotate(${count * 45}deg)`;
	};

	return (
		<>
			<button onClick={() => rotation(--num.current)}>left</button>
			<button onClick={() => rotation(++num.current)}>right</button>

			<div ref={refBox} className='box'></div>
		</>
	);
}

/*
	useState : 해당 값이 변경 되면 무조건 컴포넌트가 재렌더링됨. 컴포넌트가 unmount 되지만 않으면, 이전 렌더링 사이클에서의 값이 유지됨. 

	useRef : 리액트 내부적으로 기억할 수 있는 값을 담기 위한 참조 객체를 생성해주는 함수.
		* 쓰임 (1) : 모션을 위해서 자주 바뀌는 수치값을, 컴포넌트를 재호출하지 않으면서 관리할 때.
		* 쓰임 (2) : 가상DOM이 아닌 realDOM 요소를 리액트 구조 안에서 선택해서 써야할 때.

		[useRef의 쓰임 (1) 에 대한 해설]
	- useRef를 통해서 생성한 참조 객체에 저장한 값은, 다른 state 변경에 의해서 컴포넌트가 재렌더링 되더라도 이전 렌더링 사이클에서의 값을 유지함. 
	- 참조객체에 담겨있는 값을 작업자가 임의로 변경하더라도, 해당 값의 변경은 state와 달리 컴포넌트를 재렌더링 시키지 않음. 
	- 화면의 정보를 담당하는 중요한 값이 아닌, 단지 모션을 위한 수치값 같은 중요하지 않은 값들은 참조 객체로 관리하는 것이 유리함. 

		[useRef의 쓰임 (2)에 대한 해설]
	- 리액트에서 어쩔 수 없이 realDOM을 직접 가져와서 이벤트 연결을 해야 하는 경우 
	- 스크롤 모션 이벤트 input요소에 포커스 연결 이벤트 
	- document.querySelector는 리액트의 제어에서 벗어난, 이전 렌더링 사이클에서 생성된 과거의 신뢰할 수 없는 DOM을 참조하는 반면, useRef를 통한 참조 객체에 담겨있는 realDOM은 리액트에서 관리하는, 신뢰할 수 있는 최신 상태의 realDOM을 참조한 것.
*/
