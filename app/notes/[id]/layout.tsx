"use client"

import { ActionIcon, Container } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const NoteLayout = ({children} : any) => {
    return ( 
        <Container mx={0}>
            <ActionIcon bg="blue">
                <Link href={"/notes"}>
                    <IconArrowLeft/>
                </Link>
            </ActionIcon>
            {children}
        </Container>
    );
}
 
export default NoteLayout;