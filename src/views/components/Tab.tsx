import { useState } from "react";

// @mui
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// @project
import MainCard from "@/components/MainCard";

// @ assets
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

// --------------------------------- Tab - PAGE  --------------------------------- 

export default function TabPage() {
  const [value, setValue] = useState(0);

  return (
    <MainCard title="Tab Component Showcase">
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab
          icon={<DescriptionTwoToneIcon />}
          iconPosition="start"
          label="Details"
        />
        <Tab
          icon={<ReceiptTwoToneIcon/>}
          iconPosition="start"
          label="Invoice"
        />
        <Tab
          icon={<LocalShippingTwoToneIcon />}
          iconPosition="start"
          label="Status"
        />
      </Tabs>
    </MainCard>
  );
}
