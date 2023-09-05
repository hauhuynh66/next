"use client"

import { Button, Center, Group, Stack, TextInput } from "@mantine/core";
import { Form, useForm } from '@mantine/form';
import { pb } from "../lib";

export const metadata = {
    title : "Login",
    description : ""
}

const LoginForm = () => {
    const form = useForm({
        initialValues: {
            email : "",
            password : ""
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        }
    });

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const token = await pb.collection("users").authWithPassword(form.values.email, form.values.password);
        console.log(token);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <Center>
                <Stack spacing="sm" w="50%">
                    <TextInput placeholder="Email" w="100%" {...form.getInputProps('email')} id="email"/>
                    <TextInput placeholder="Password" type="password" w="100%" {...form.getInputProps('password')} id="password"/>
                    <Group grow>
                        <Button type="reset" color="dark.1">Clear</Button>
                        <Button type="submit" color="blue.4">Submit</Button>
                    </Group>
                </Stack>
            </Center>
        </form>
        
    );
}
 
export default LoginForm;