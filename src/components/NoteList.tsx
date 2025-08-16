import { db } from "@/firebase/firebase";
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Note {
    id:string,
    content:string
}

const NoteList = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot)=>{
            const noteData = snapshot.docs.map(doc =>({
                id:doc.id,
                ...doc.data()
            })) as Note[];
            setNotes(noteData);
        })
        return ()=> unsubscribe();
    }, [])
    console.log(notes);
    

    if(notes.length ===0) {
        return <p className="text-gray-400 text-center mt-4">No notes yet, Start typing!</p>
    }

    const handleDelete =async(id:string)=>{
        await deleteDoc(doc(db, "notes", id));
        toast.success("Note deleted")
    }
  return (
    <div className={`grid gap-4 mt-4 ${notes.length ===1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {notes.map((note)=>(
            <div key={note.id} className="p-5 border border-gray-200 rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-200 flex items-center justify-between">
                <p className="text-base text-gray-800">{note.content}</p>
                <Button variant="destructive" onClick={()=>handleDelete(note.id)}>
                    Delete
                </Button>
            </div>
        ))}
    </div>
  )
}

export default NoteList