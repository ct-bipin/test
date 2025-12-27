// @mui
import TextField from "@mui/material/TextField";

// @project
import { MainCard } from "@/components";

// @assets
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// ---------------------------------  TEXTFIELD - PAGE  ---------------------------------

export default function TextfieldpPage() {
  return (
    <>
      <MainCard title="Textfield Component Showcase">
        <TextField
          placeholder="Search"
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
    </>
  );
};
