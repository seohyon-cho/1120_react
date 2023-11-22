import { useState } from 'react';
import './App.scss';

export default function App() {
	// state값 변경 순서에 따라 결과 화면이 달라지는 경우
	console.log('render');
	let [Index, setIndex] = useState(0);

	return (
		<>
			{/* setIndex가 실행되는 순간에 0 (해당 값의 초기값) 이 먼저 활용됨. 실제로 setIndex(0), 즉 초기값부터 호출되는 것. */}
			<button onClick={() => setIndex(Index--)}>left</button>
			{/* setIndex가 실행되는 순간에 바로 초기값을 먼저 증가시킨 뒤 호출되므로 실제로 setIndex(1)부터 바로 호출됨. */}
			<button onClick={() => setIndex(++Index)}>right</button>
			<div className='box' style={{ transform: `rotate(${45 * Index}deg)` }}></div>
		</>
	);
}
