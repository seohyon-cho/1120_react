export default function App() {
	const name = '김영희';
	// const test = '주석';
	const cl_name = 'wrap';
	/*
		JSX문 안쪽에 {}안에서 가능한 연산은 제한적임. 
		가능한 연산
		1. 변수 치환 
		2. 조건문 (3항연산자, &&만 가능.)
		3. 반복문 (map만 가능.)
	*/
	return (
		// 스크립트 주석 가능
		<>
			{/* JSX문 안쪽에서는 주석도 연산이 필요하기 때문에 중괄호로 묶어 처리해야 함.  */}
			<section className={cl_name}>
				<h1>안녕하세요, 제 이름은 {name} 입니다. </h1>
			</section>
		</>
	);
}
