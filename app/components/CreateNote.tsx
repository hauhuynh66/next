"use client"

import { Button } from "@mantine/core"
import { useState } from "react"

const CreateNote = () => {
    const [content, setContent] = useState("")

    const create = async () => {
        const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
            
        })
    }

    return (
        <div className="m-5">
            <form onSubmit={create}>
                <label>
                    Text input: <input name="myInput" />
                </label>
                <Button size="xl" color="blue" type="submit">Create</Button>
            </form>
        </div>
    )
}

export default CreateNote;