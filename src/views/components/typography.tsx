// @mui
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// @project
import { MainCard } from "@/components";

// ---------------------------------  TYPOGRAPHY - PAGE  ---------------------------------

export default function TypographyPage() {
    return (
        <>
            <MainCard title="Typography Component Showcase">
                <Stack spacing={3}>
                    {/* Headings */}
                    <Typography variant="h1">h1. Heading</Typography>
                    <Typography variant="h2">h2. Heading</Typography>
                    <Typography variant="h3">h3. Heading</Typography>
                    <Typography variant="h4">h4. Heading</Typography>
                    <Typography variant="h5">h5. Heading</Typography>
                    <Typography variant="h6">h6. Heading</Typography>

                    <Divider />

                    {/* Subtitles */}
                    <Typography variant="subtitle1">
                        subtitle1. Subtitle text
                    </Typography>

                    <Typography variant="subtitle2">
                        subtitle2. Subtitle text
                    </Typography>

                    <Divider />

                    {/* Body */}
                    <Typography variant="body1">
                        body1. This is primary body text used for main content.
                    </Typography>

                    <Typography variant="body2">
                        body2. This is secondary body text used for descriptions.
                    </Typography>

                    <Divider />

                    {/* Button */}
                    <Typography variant="button">
                        button. Button text style
                    </Typography>

                    <Divider />

                    {/* Caption */}
                    <Typography variant="caption" display="block">
                        caption. Small helper or hint text
                    </Typography>

                    <Divider />

                    {/* Overline */}
                    <Typography variant="overline" display="block">
                        overline. OVERLINE TEXT
                    </Typography>

                    <Divider />

                    {/* Link (custom variant) */}
                    <Typography variant="link">
                        link. This is link text style
                    </Typography>
                </Stack>
            </MainCard>
        </>
    )
}