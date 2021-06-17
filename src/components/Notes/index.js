import React, { useEffect, useState } from 'react'
import { NoteForm } from './NoteForm/index'
import { db } from '../../firebase'
export const Notes = () => {
    const [notes, setNotes] = useState([])
    const [currentId, setCurrentId] = useState('')
    const addOrEdditNotes = async (newNote) => {
        if(currentId ===""){
        await db.collection('Notes').doc().set(newNote)}
        else{
           await db.collection('Notes').doc(currentId).update(newNote)
        }
        setCurrentId('');

    }


    useEffect(() => {
        showNotes()
    }, [])


    const showNotes = async () => {
        db.collection("Notes").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            console.log(docs)
            setNotes(docs)
        })
    }

    const deleteNotes = async (id) => {
        if (window.confirm('Are you sure you want to delete this web-note?')) {
            await db.collection('Notes').doc(id).delete();
        }
    }

   

    return (
        <>
            <NoteForm addOrEdditNotes={addOrEdditNotes} currentId={currentId}  />
            {notes.map((note) => {
                return (
                    <div key={note.id} className='card' >
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h3>{note.name}</h3>
                                <div>
                                    <i role='button' className='material-icons text-danger ' onClick={() => deleteNotes(note.id)}>delete</i>
                                    <i role='button' className='material-icons text-danger ' onClick={() => setCurrentId(note.id)}>edit_note</i>
                                </div>
                            </div>
                            <p>{note.description}</p>
                            <a href={note.url} rel="noreferrer" target='_blank'>Go to website</a>
                        </div>
                    </div>)
            })}

        </>
    )
}
