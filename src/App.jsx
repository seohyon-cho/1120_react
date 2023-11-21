export default function App() {
	const colors = ['orange', 'hotpink', 'aqua', 'green', 'orangered', 'cornflowerblue'];

	return (
		<>
			<h1>Color Chart</h1>

			<ul>
				{colors.map((color, idx) => {
					// return문에서 map을 통해 반복적으로 생성되는 가상DOM 요소에는, 무조건 고유의 key값을 부여해줘야 함.
					// 이유 : react로 하여금 여러 개의 반복 요소 중에서 수정해야 하는 요소를 효율적으로 비교탐색하기 위해서.
					// 간편하게는 반복되는 순서값(ids)만을 집어넣을 수도 있긴 하나, 권장하지는 않으므로
					// DB의 각 데이터에 내장되어 있는 Object_id를 활용하거나, 실제 데이터와 순번을 결합 (color+idx) 해서 고유 문자 값을 생성하는 것이 바람직함.
					return (
						<li key={color + idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</>
	);
}
