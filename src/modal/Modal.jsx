import { useEffect, useState } from 'react';
import './Modal.scss';

export default function Modal({ setOpen }) {
	const [Num, setNum] = useState(0);

	// 컴포넌트 마운트 시 한 번만 실행
	useEffect(() => {
		console.log('mounted');

		return () => {
			console.log('unmounted');
		};
	}, []);

	// Num이라는 state의 값이 변경될 때마다 실행
	useEffect(() => {
		console.log('Num changed');
	}, [Num]);

	return (
		<aside className='Modal'>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
			<button onClick={() => setOpen(false)}>close</button>
			<h1>{Num}</h1>
		</aside>
	);
}

/*
  useEffect : 컴포넌트의 생명주기를 다루기 위한 hook

  useEffect(콜백함수, 의존성배열)
  useEffect(()=>{
    // 실행할 구문
  }, [])
  [생명주기]
  - 컴포넌트 생성 (Mount)
      : useEffect에서 의존성 배열이 비어있는 상태에서 입력한 콜백함수는, 컴포넌트 생성 시에 한 번만 실행됨. 
  - 컴포넌트 변경 (State Change)
      : useEffect의 의존성 배열에 특정 state를 등록하면, 해당 state가 변경될 때마다 실행됨. 
  - 컴포넌트 소멸 (Unmount)
      : useEffect의 의존성 배열이 비어있는 상태에서 return 함수를 내보내면, 컴포넌트 소멸 시에 한 번만 실행됨.
  
*/
