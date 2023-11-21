import './Card.scss';

export default function Card(props) {
	// 부모 컴포넌트에 전달되는 요소들을 props 라는 객체로 묶어서 자식 컴포넌트의 파라미터로 전달받음.
	console.log(props);
	// props 안에는 {colorName: '색상', index: 순서값, width: 넓이값, show: display속성값} 의 구조로 있는 것이므로, props.width, props.colorName 이런식으로 불러와서 쓰는 것임.
	return (
		<article className='Card' style={{ width: props.width }}>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
			<div className='txtBox' style={{ display: props.show }}>
				{props.index + 1} - {props.colorName}
			</div>
		</article>
	);
}
