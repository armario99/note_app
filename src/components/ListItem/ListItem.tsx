import React from 'react'
import {Note} from '../NoteItem/Note'; 
import './ListItem.css';
interface ItemProps {
    note: Note[];
    setSel_tag: (tag: string) => void;
}   

export default function ListItem({ note,setSel_tag }: ItemProps) {
    const defaultTags = ["All", "tag1", "tag2", "tag3"];
    
    const allTags: string[] = [];
    note.forEach(my_note => {
        if (!allTags.includes(my_note.tag)) {
            allTags.push(my_note.tag);
        }
    });

    // 기본 태그와 중복을 제거한 모든 태그 리스트 생성
    const tags = [...defaultTags];
    allTags.forEach(tag => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });

    const handleClick = (tag: string) => {
        console.log('클릭한 항목:', tag);
        setSel_tag(tag)
    };

  return (
    <div>
        <h2>태그 리스트</h2>
        <ul>
        {tags.map((tag, index) => (
            <li onClick={() => handleClick(tag)} key={index}>{tag}</li>
        ))}
        </ul>
  </div>
  )
}
