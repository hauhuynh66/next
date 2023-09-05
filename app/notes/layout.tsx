"use client"

import { Container, Grid } from "@mantine/core";

const NotesLayout = ({children} : any) => {
    return ( 
        <Container mx={0} my="sm">
            <Grid>
                {children}
            </Grid>
        </Container>
    );
}
 
export default NotesLayout;