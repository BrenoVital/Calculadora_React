import { Box } from "@mui/material";

interface IPageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
  ...rest
}: IPageContainerProps) {
  return (
    <Box
      display="flex"
      p={1}
      gap={1}
      flexDirection="column"
      width="100%"
      {...rest}
    >
      {children}
    </Box>
  );
}
