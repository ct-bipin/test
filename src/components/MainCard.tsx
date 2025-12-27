import type { ReactNode } from "react";

// @mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";

interface MainCardProps {
  title?: string;
  children: ReactNode;
}

// ---------------------------------  COMPONENTS - MAINCARD  ---------------------------------

export default function MainCard({ title, children }: MainCardProps) {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
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
