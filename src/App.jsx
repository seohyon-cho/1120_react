import { useRef, useState } from 'react';
import './App.scss';

/*
	useRef 값은 변경사항을 해당 렌더링 사이클에 바로 반영함.
	state는 변경사항을 다음번 렌더링 사이클에 반영함. 
*/

export default function App() {
	console.log('render');

	let num1 = useRef(0);
	const [Num2, setNum2] = useState(0);

	const handleClick = () => {
		num1.current++;
		setNum2(Num2 + 1);
		console.log('num1', num1.current);
		console.log('Num2', Num2);
	};

	return (
		<>
			<button onClick={handleClick}>버튼</button>
		</>
	);
}
