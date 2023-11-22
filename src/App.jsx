import { useState } from 'react';
import './App.scss';

/*
	state 관련 주의 사항
	1. state 값 변경 시, 해당 값은 무조건 다음 렌더링 사이클에 반영됨. 
	2. (1)의 특성에 기인해서, 특정 숫자값을 증감시킬 때에는 후위증감연산자를 사용하면 안 됨. 
*/

export default function App() {
	console.log('render');
	const [Index, setIndex] = useState(0);

	return (
		<>
			<button onClick={() => setIndex(Index - 1)}>left</button>
			<button onClick={() => setIndex(Index + 1)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
