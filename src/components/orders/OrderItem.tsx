// @mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type OrderItemProps = {
  label: string;
  value: string;
};

export default function OrderItem({ label, value }: OrderItemProps) {
  return (
    <Stack direction="row" sx = {{ gap:1 }}>
      <Typography color="text.primary" variant="body1">
        {label} :
      </Typography>
      <Typography color="text.secondary" variant="body1">
        {value}
      </Typography>
    </Stack>
  );
}
