import type { ReactNode } from "react";

// @mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

interface MainCardProps {
  title?: string;
  children: ReactNode;
}

// ---------------------------------  COMPONENTS - MAINCARD  ---------------------------------

export default function MainCard({ title, children }: MainCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ 
      borderRadius: 3,
      border: `1px solid ${theme.palette.grey[200]}`,
      // boxShadow: theme.shadow.card
      }}>
      {title && (
        <>
          <CardHeader title={title} />
          <Divider />
        </>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
}
