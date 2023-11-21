export default function App() {
	// 리액트에서는 특정 DOM(가상DOM) 요소 선택 시, 가급적 document.querySelector 사용은 지양할 것.
	// 리액트 구조상 document.querySelector는 현재 작업하고 있는 최신 가상DOM이 아닌, 이미 한 번 real DOM 형태로 변환된 예전 DOM을 찾게 되므로 DOM요소의 신뢰성이 떨어짐.
	const changeButton = (e, txt) => {
		e.target.innerText = txt;
	};

	return (
		<>
			<section>
				<button onClick={(e) => changeButton(e, '버튼2')}>버튼</button>
			</section>
		</>
	);
}
