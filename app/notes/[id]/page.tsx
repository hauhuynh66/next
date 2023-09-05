import { Note, NoteItem } from "@/app/components/Note"

export const metadata = {
    title : "Note details"
}

async function getNote(noteId : string) : Promise<NoteItem> {
    const res = 
        await fetch(
            `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
        )
    
    return await res.json()
}

export default async function NoteDetail({params} : {params : {id : string}}) {
    console.log(params)
    const note = await getNote(params.id)
    return (
        <Note note={note}/>
    )
}