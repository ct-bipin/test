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
      <Typography  variant="subtitle2" color="grey.900">
        {label} :
      </Typography>
      <Typography  variant="caption" color="grey.500">
        {value}
      </Typography>
    </Stack>
  );
}
