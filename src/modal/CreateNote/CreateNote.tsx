import React from 'react'
import { useState } from 'react';
import './CreateNote.css';
import { Note } from '../../components/NoteItem/Note';
 
interface ModalProps {
    ModalOpen: boolean;
    note: Note[];
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNote_save: React.Dispatch<React.SetStateAction<Note[]>>;
  } 
function generateUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36);
}

export default function Create_note( { ModalOpen,setModalOpen,setNote_save,note }: ModalProps) {
  const [inputValue, setInputValue] = useState(""); // 입력된 값을 상태로 관리
  const [inputTag, setInputTag] = useState(""); // 입력된 값을 상태로 관리
  const newNoteId = generateUniqueID(); // 고유한 ID 생성
  const input_note = () => {
    if (!inputValue.trim()|| !inputTag.trim()) {
      // 입력된 텍스트가 비어 있으면 동작하지 않음
      if (!inputValue.trim()){
        alert("노트 내용을 작성하세요.");
      }
      else if (!inputTag.trim()){
        alert("태그를 선택하세요.");
      }
      return;
  }
    console.log('노트 생성.');
    setNote_save(prevNotes => [
      ...prevNotes,
      { id: newNoteId, text: inputValue, tag: inputTag  } // 새로운 노트 객체 생성 및 기존 노트에 추가
    ]);
    setInputValue(""); // 입력값 초기화
    setInputTag(""); // 입력값 초기화
    setModalOpen(false)
  };

  const output_note = () => {
    console.log('생성창 닫음.');
    setInputValue(""); // 입력값 초기화
    setInputTag(""); // 입력값 초기화
    setModalOpen(false)
  };

  const availableTags = ["tag1", "tag2", "tag3"]; // 선택 가능한 태그들의 배열

  const allTags: string[] = [];
    note.forEach(my_note => {
        if (!allTags.includes(my_note.tag)) {
            allTags.push(my_note.tag);
        }
    });

    // 기본 태그와 중복을 제거한 모든 태그 리스트 생성
    const tags = [...availableTags];
    allTags.forEach(tag => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });

  return (
    <div>
      {
        ModalOpen &&
        <div className={'modal-container'}>
          <div className={'modal-content'}>
            <p>노트 생성</p>
            <textarea
              className="note"
              placeholder="노트를 입력하세요"
              value={inputValue} // 입력값 상태와 연결
              onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
            />

            <input
              type="text"
              className="tag"
              placeholder="tag를 입력하세요"
              value={inputTag} // 입력값 상태와 연결
              onChange={(e) => setInputTag(e.target.value)} // 입력값 업데이트
            />
            <select
              className="tag"
              value={inputTag} // 선택된 값 상태와 연결
              onChange={(e) => setInputTag(e.target.value)} // 선택된 값 업데이트
            >
              <option value="">태그를 선택하세요</option>
              {tags.map((tag, index) => (
                  <option key={index} value={tag}>{tag}</option>
              ))}
            </select>
            <button className={'modal-close-btn'} onClick={() => input_note()}>
              노트 생성
            </button>
            <button className={'modal-close-btn'} onClick={() => output_note()}>
              모달 닫기
            </button>
          </div>
        </div>
      }
    </div>
  )
}
