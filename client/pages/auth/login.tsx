import React from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextInput,
  PasswordInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { showNotification, updateNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { login } from "../../api";

function LoginPage() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof login>["0"]
  >(login, {
    onSuccess: () => {
      // updateNotification({
      //   id: "login",
      //   title: "Success",
      //   message: "Successfully login your account",
      // });

      router.push("/");
    },
  });

  return (
    <>
      <Head>
        <title>Login user</title>
      </Head>
      <Container>
        <Title>Login</Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="jane@example.com"
                required
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                placeholder="Your strong password"
                required
                {...form.getInputProps("password")}
              />

              <Button type="submit">Login</Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default LoginPage;
