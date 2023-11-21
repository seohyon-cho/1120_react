export default function App() {
	console.log('re-render');
	// 해당 경우에는 이벤트 발생 시 state의 정보값을 변경하는 것이 아닌
	// 일반 변수의 값을 변경하고 있기 때문에
	// react 입장에서는, 해당 내용의 변경 사항을 중요하게 인식하지 않아서 컴포넌트를 재호출(re-render)하지 않음.
	let num = 0;
	// 위와 같이 직접 변수값을 변경해도, 화면에서의 변경은 일어나지만, 이 변경사항은 react의 제어에서 벗어난, 일반적인 DOM의 구조가 변경되는 것뿐임.
	// 굳이 번거롭게 일반 변수가 아닌 state라는 것만 가지고 화면을 제어하도록 강제하는 이유는?

	const changeButton = (e, txt) => {
		e.target.innerText = txt + num++;
	};

	return (
		<>
			<section>
				<button onClick={(e) => changeButton(e, 'button')}>버튼</button>
			</section>
		</>
	);
}

/*
	리액트에서의 re-render, re-paint 개념
	re-render : 해당 컴포넌트를 재호출

	리액트에서 re-render를 발생하는 경우는 다음과 같다. 
	1. 물리적으로 JSX의 구조가 변경되는 경우
	2. 무조건 state라는 정보값이 변경되는 경우
*/
