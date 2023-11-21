import Card from './card/Card';

export default function App() {
	const colors = ['orange', 'hotpink', 'aqua', 'green'];

	return (
		<>
			<h1>Color Chart</h1>
			{colors.map((color, idx) => {
				// 컴포넌트 호출 시, 컴포넌트의 특정 값을 key={value} 형태로 컴포넌트 내부에 전달 가능. (=props 라고 함.)
				return <Card key={color + idx} colorName={color} index={idx} />;
			})}
		</>
	);
}
