import React from 'react'
import './NoteItem.css';

import {Note} from './Note';  

interface ItemProps {
    note: Note[];
    Sel_tag: string;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNote_save: React.Dispatch<React.SetStateAction<Note[]>>;
    setSel_id : React.Dispatch<React.SetStateAction<string>>;
}   

export default function NoteItem({ note, setModalOpen,Sel_tag,setNote_save,setSel_id }: ItemProps ) {

  const filteredNotes = Sel_tag === "All" ? note : note.filter(my_note => my_note.tag === Sel_tag);
  const handleRemoveNote = (id: string) => {
    // 선택한 id를 가진 노트를 제외하고 새로운 배열 생성
    const updatedNotes = note.filter(my_note => my_note.id !== id);
    // 새로운 배열로 note 상태 업데이트
    setNote_save(updatedNotes);
  };
  const Viewnote = (id: string) => {
    console.log('노트 모달 생성.');
    setModalOpen(true);
    setSel_id(id);
  };

  return (
    <div className='NoteItems'>
        {filteredNotes.map((my_note, index) => (
            <div className='NoteItem' key={index}>
              <div onClick={() => Viewnote(my_note.id)}>
                <p>myId: {my_note.id}</p>
                <p>myNote: {my_note.text}</p>
                <p>myTag: {my_note.tag}</p>
              </div>
                <input 
                  type="button" 
                  className="remove-btn" 
                  value="Remove" 
                  onClick={() => handleRemoveNote(my_note.id)} 
                />
            </div>
            
        ))}
    </div>
);
}