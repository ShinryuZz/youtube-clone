import { Button, Modal } from "@mantine/core";
import { useState } from "react";
import React from "react";

function UploadVideo() {
  const [opened, setOpened] = useState<boolean>();
  return (
    <>
      <Modal
        closeOnClickOutside={false}
        onClose={() => setOpened(true)}
        opened={opened}
        title="Upload Video"
        size="xl"
      >
        hello
      </Modal>
      <Button onClick={() => setOpened(true)}>Upload video</Button>
    </>
  );
}

export default UploadVideo;
