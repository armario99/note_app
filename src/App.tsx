import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import CreateNote from './modal/CreateNote/CreateNote';
import ViewNote from './modal/ViewNote/ViewNote';
import NoteItem from './components/NoteItem/NoteItem';  
import {Note} from './components/NoteItem/Note';  
import ListItem from './components/ListItem/ListItem';
function App() {
  const [CModalOpen, setCModalOpen] = useState(false);
  const [VModalOpen, setVModalOpen] = useState(false);
  const [Sel_id, setSel_id] = useState("");
  const [Note_save , setNote_save] = useState<Note[]>([]);
  const [Sel_tag, setSel_tag] = useState("ALL");

  return (
    <BrowserRouter>
        <Header setModalOpen = {setCModalOpen} />
        <div className="Note_container">
          <div className='list_bar'>
            <ListItem note ={Note_save} setSel_tag = {setSel_tag}/>
          </div>
          <div className='note_container'>
            <h2>Note</h2>
            <NoteItem note ={Note_save} setNote_save={setNote_save} Sel_tag ={Sel_tag} setModalOpen = {setVModalOpen} setSel_id = {setSel_id}/>
          </div>
          <ViewNote ModalOpen = {VModalOpen} setNote_save = {setNote_save} setModalOpen = {setVModalOpen} note ={Note_save} Sel_id= {Sel_id}/>
          <CreateNote ModalOpen = {CModalOpen} setModalOpen = {setCModalOpen} setNote_save = {setNote_save} note ={Note_save} />
        </div>
    </BrowserRouter>
  );
}

export default App;
