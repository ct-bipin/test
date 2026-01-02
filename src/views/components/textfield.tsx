// @mui
import TextField from "@mui/material/TextField";

// @project
import MainCard from "@/components/MainCard";

// @assets
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// ---------------------------------  TEXTFIELD - PAGE  ---------------------------------

export default function TextfieldpPage() {
  return (
    <MainCard title="Textfield Component Showcase">
      <TextField
        placeholder="Search"
        sx={{ height: 44, width: 320 }}
        slotProps={{
          input: {
            "data-search": true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "grey.600" }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </MainCard>
  );
}
