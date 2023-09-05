"use client"

import { Card, Center, Text } from "@mantine/core"
import moment from 'moment'
import Link from "next/link"

export interface NoteItem {
    title : string,
    content : string,
    id : string, 
    created : Date
}

function Note({note} : {note : NoteItem}){
    let created = moment(note.created).format("YY/MM/DD HH:mm")
    return (
        <Card bg="dark" mx="sm" shadow="lg" radius="lg">
            <Text fz="xl" fw="bold" align="center">{note.title}</Text>
            <Center
                mih={100}>
                    <Text>{note.content}</Text>
                </Center>
            <Text >{created}</Text>
        </Card>
    )
}

function NotePreview({note} : {note : NoteItem}){
    return (
        <Card bg="dark" mx="sm" shadow="lg" radius="lg">
            <Text fz="xl" fw="bold" align="center">{note.title}</Text>
            <Link href={`/notes/${note.id}`}>
                        
            </Link>
        </Card>
    )
}

export {
    Note,
    NotePreview
}