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
      : 실사례 (1) : 모달창 생성 시 강제로 스크롤바 제거 시 
      : 실사례 (2) : window 전역에 직접 이벤트를 연결해야되는 특정 컴포넌트 전용 함수를 등록할 때
      : 실사례 (3) (중요) : data fetching처럼, 반복 호출할 필요가 없는 무거운 연산을 처리할 때.

  - 컴포넌트 변경 (State Change)
      : useEffect의 의존성 배열에 특정 state를 등록하면, 해당 state가 변경될 때마다 실행됨. 
      
  - 컴포넌트 소멸 (Unmount)
      : useEffect의 의존성 배열이 비어있는 상태에서 return 함수를 내보내면, 컴포넌트 소멸 시에 한 번만 실행됨.
      : 실사례 (1) : 모달창 제거 시 다시 스크롤바 활성화시킬 때
      : 실사례 (2) : window 전역에 이벤트가 연결되어 있는 특정 컴포넌트 전용 함수를 제거할 때
  
*/
