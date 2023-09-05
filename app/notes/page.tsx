import Link from "next/link";
import {NotePreview, NoteItem } from "../components/Note";

export const metadata = {
    title : "Note list"
}

async function getNotes() : Promise<NoteItem[]> {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records")
    
    const json = await res.json()

    const data : Array<NoteItem> = [];

    json?.items.forEach((item : any) =>{
        data.push(item as NoteItem)
    })

    return data
}

export default async function NotesPage() {
    const notes = await getNotes()
    return (
        notes.map((note : NoteItem, index) => {
            return (
                <div key={index}>
                    <NotePreview note={note}/>
                </div>
            )
        })
    )
}