import './App.css';
import Head from './component/head';
import Foot from './component/foot';
import Note from './component/Note';
import Notes from './notes';
import CreateArea from './component/CreateArea'
import { useState } from 'react';




function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
               return index!==id;
      })
    })

  }
  return (

    <div>
      <Head />

      <div >
        <CreateArea className="container" onAdd={addNote} />
        {notes.map((noteItem,index) => {
          return <Note
          key={index}
            id={index} 
            
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        })}
        {Notes.map(noteItem => {
   
        })}</div>


      <Foot />
    </div>
  );
}

export default App;
