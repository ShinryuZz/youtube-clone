import React from "react";
import type { NextPage } from "next";
import { ReactElement } from "react";
import HomePageLayout from "../layout/Home";
import styles from "../styles/Home.module.css";
import { Button, Text } from "@mantine/core";

const Home = () => {
  return <div className={styles.container}></div>;
  // return (
  //   <main className={styles.container}>
  //     <h1 className={styles.title}>Mantine</h1>
  //     <Text>Text Component</Text>
  //     <Button>Button</Button>
  //   </main>
  // );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;
