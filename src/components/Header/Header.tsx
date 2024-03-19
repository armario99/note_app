import React from 'react'
import './Header.css';

interface HeaderProps {
  setModalOpen: (isOpen: boolean) => void;
}
export default function Header( { setModalOpen }: HeaderProps) {

  const handleClick = () => {
    console.log('버튼이 클릭되었습니다.');
    setModalOpen(true);
    // 여기에 클릭 이벤트 처리 로직을 추가할 수 있습니다.
  };

  return (
      <header className="App_header">
        <div className='header'>
          <div className='List_div'>
            <p className='Note_name'>My Note App</p>
          </div>
          <div className='body_div'>
            <p className='Note_name'>Note</p>
            <input type ='button' className='Create_note' value="+" onClick={handleClick} />
          </div>
        </div>
      </header>
  )
}
