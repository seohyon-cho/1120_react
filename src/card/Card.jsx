import './Card.scss';

export default function Card(props) {
	// 부모 컴포넌트에 전달되는 요소들을 props 라는 객체로 묶어서 자식 컴포넌트의 파라미터로 전달받음.
	console.log(props);
	return (
		<article className='Card'>
			<div className='bgBox' style={{ backgroundColor: props.colorName }}></div>
			<div className='txtBox'>
				{props.index + 1} - {props.colorName}
			</div>
		</article>
	);
}
