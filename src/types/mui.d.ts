
import "@mui/material/TableCell";
import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/TableCell" {
  interface TableCellPropsVariantOverrides {
    id: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    pending: true;
    hold: true;
    complete: true;
    cancel: true;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
    darkest?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darkest?: string;
  }
}


declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}
