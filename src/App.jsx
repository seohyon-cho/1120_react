function App() {
	return (
		<>
			<div className='App'>
				<h2>World</h2>
			</div>
			<div className='box'></div>
		</>
	);
}

export default App;

/*
	컴포넌트 함수의 필수 조건
	1. 함수명은 대문자로 시작되어야 함. 
	2. JSX를 리턴해야 함. 
	3. 하나의 컴포넌트 함수는 복수 개의 jsx 요소를 리턴하는 것이 불가능함. 
	4. 복수 개의 jsx 요소를 내보내고 싶을 때에는, 한 번 더 상위요소로 wrapping 처리. 
	5. 만약 불필요한 상위의 wrapping 요소 출력이 싫다면, 태그 명이 없는 빈 꺾쇠 <></> (fragment) 로 묶어주기.
	6. jsx는 기본적으로 자바스크립트 문법이기 떄문에, 예약어 명령어를 사용할 수 없음. 


	// JSX : 리액트에서 전용으로 쓰이는 DOM 생성 문법
	원래는 React.createElement() 라는 메서드를 이용해서 복잡하게 구성해야 했던 로직을, HTML 태그를 따라한 친화적인 문법을 이용해 편하게 DOM을 생성하기 위한 리액트만의 문법체계.
*/
