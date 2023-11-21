import './Card.scss';

export default function Card({ colorName, index, width, show }) {
	// 만약 이전처럼 단지 props 라는 파라미터 이름으로만 객체를 통으로 전달하면, 해당 props에 전달되는 값들이 많은 경우 어떤 값이 전달되는지 파악하기가 어려움.
	// 그러므로, props로 통째로 쓰지않고, 비구조화할당을 이용해 직접 전달하면 props.어쩌구 쓰지 않고 그냥 바로 불러서 쓸 수 있음. (일반적인 방법. 효율적임)
	return (
		<article className='Card' style={{ width: width }}>
			<div className='bgBox' style={{ backgroundColor: colorName }}></div>
			<div className='txtBox' style={{ display: show }}>
				{index + 1} - {colorName}
			</div>
		</article>
	);
}
