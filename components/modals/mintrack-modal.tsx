import { useThemeColor } from "@/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

export function MintrackModal({
  opened,
  close,
  children,
  withCloseIcon = false,
}: {
  opened: boolean;
  close: () => void;
  children: ReactNode;
  withCloseIcon?: boolean;
}) {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Modal
      size="auto"
      classNames={{
        body: "!p-0 !m-0 flex-1 flex flex-col overflow-auto",
        header: "!p-0 !m-0",
        content: "rounded-2xl flex flex-col",
      }}
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
    >
      {children}
    </Modal>
  );
}
