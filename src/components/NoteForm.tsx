import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { db } from "@/firebase/firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import toast from 'react-hot-toast';
const NoteForm = () => {
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        if (!note.trim()) {
            toast.error("Please add note")
        } else {
            setLoading(true);
            await addDoc(collection(db, "notes"), {
                content: note,
                createdAt: serverTimestamp()
            })
            setNote("");
            setLoading(false);
            toast.success("Note added")
        }
    }   
    return (
        <div className="space-y-4">
            <Input
                placeholder="Type your note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={50}
            />
            <Button className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? "Saving..." : "Save Note"}
            </Button>
        </div>
    )
}

export default NoteForm