import React from 'react'
import { Note } from '../../components/NoteItem/Note';
 
interface ModalProps {
    ModalOpen: boolean;
    note: Note[];
    Sel_id:string;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNote_save: React.Dispatch<React.SetStateAction<Note[]>>;
  } 

export default function ViewNote({ModalOpen, setModalOpen,setNote_save,note,Sel_id}: ModalProps) {
    const mynote = note.find(my_note => my_note.id === Sel_id);
    return (
    <div>
      {
        ModalOpen &&
        <div className={'modal-container'}>
          <div className={'modal-content'}>
            <p>노트 생성</p>
            <p>{mynote && mynote.text}</p>
            <button type="button" onClick={() => setModalOpen(false)}>창 닫기</button>
          </div>
        </div>
      }
    </div>
  )
}
