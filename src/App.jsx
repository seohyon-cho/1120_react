import Box from './box/Box';

export default function App() {
	// 박스 클릭 시, 인수로 원하는 색상값을 문자열로 집어넣어서 해당 박스의 배경 색 변경하는 핸들러 함수 따로 만든 뒤, 클릭 이벤트 시 호출.
	return (
		<>
			<Box />
		</>
	);
}
