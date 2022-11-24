import {
  Button,
  Container,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { registerUser } from "../api";

function RegisterPage() {
  const router = useRouter;

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof registerUser>["0"]
  >(registerUser, {
    onMutate: () => {
      showNotification({
        id: "register",
        title: "Creating account",
        message: "Please wait...",
        loading: true,
      });
    },
    onSuccess: () => {
      showNotification({
        id: "register",
        title: "Success",
        message: "Sucecssfully created account",
        loading: true,
      });

      router.push("/auth/login");
    },
    onError: () => {
      showNotification({
        id: "register",
        title: "Error",
        message: "Could not create account",
        loading: true,
      });
    },
  });

  return (
    <>
      <Head>
        <title>Register User </title>
        <Container>
          <Title>Register</Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
              <Stack>
                <TextInput
                  label="Email"
                  placeholder="jane@example.com"
                  required
                  {...form.getInputProps("email")}
                />
                <TextInput
                  label="Username"
                  placeholder="shinryuzz"
                  required
                  {...form.getInputProps("username")}
                />
                <TextInput
                  label="Password"
                  required
                  placeholder="Your strong password"
                  {...form.getInputProps("password")}
                />
                <TextInput
                  label="Confirm Password"
                  placeholder="Your strong password"
                  required
                  {...form.getInputProps("confirmPassword")}
                />
                <Button type="submit">Register</Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </Head>
    </>
  );
}

export default RegisterPage;
