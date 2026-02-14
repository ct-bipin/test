// import { Box, Paper, Typography, Stack } from "@mui/material";

// const glassStyles = [
//   // 1️⃣ Soft Glass
//   {
//     name: "Soft Glass",
//     sx: {
//       background: "rgba(255,255,255,0.12)",
//       backdropFilter: "blur(8px)",
//       WebkitBackdropFilter: "blur(8px)",
//       border: "1px solid rgba(255,255,255,0.18)"
//     }
//   },

//   // 2️⃣ Strong Frosted Glass
//   {
//     name: "Frosted Glass",
//     sx: {
//       background: "rgba(255,255,255,0.18)",
//       backdropFilter: "blur(18px)",
//       WebkitBackdropFilter: "blur(18px)",
//       border: "1px solid rgba(255,255,255,0.25)"
//     }
//   },

//   // 3️⃣ Dark Glass (Good for light backgrounds)
//   {
//     name: "Dark Glass",
//     sx: {
//       background: "rgba(0,0,0,0.35)",
//       backdropFilter: "blur(14px)",
//       WebkitBackdropFilter: "blur(14px)",
//       border: "1px solid rgba(255,255,255,0.1)",
//       color: "#fff"
//     }
//   },

//   // 4️⃣ Colored Glass
//   {
//     name: "Colored Glass",
//     sx: {
//       background: "rgba(102,126,234,0.25)",
//       backdropFilter: "blur(16px)",
//       WebkitBackdropFilter: "blur(16px)",
//       border: "1px solid rgba(255,255,255,0.2)",
//       color: "#fff"
//     }
//   },

//   // 5️⃣ Glass With Glow
//   {
//     name: "Glow Glass",
//     sx: {
//       background: "rgba(255,255,255,0.15)",
//       backdropFilter: "blur(15px)",
//       WebkitBackdropFilter: "blur(15px)",
//       border: "1px solid rgba(255,255,255,0.25)",
//       boxShadow: "0 0 30px rgba(255,255,255,0.25)"
//     }
//   }
// ];

// export default function GlassEffect() {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background:"linear-gradient(135deg,#667eea 0%, #764ba2 100%)"
//       }}
//     >
//       <Stack direction="row" spacing={3} flexWrap="wrap">
//         {glassStyles.map((style, i) => (
//           <Paper
//             key={i}
//             elevation={0}
//             sx={{
//               width: 220,
//               height: 140,
//               borderRadius: 3,
//               p: 2,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               ...style.sx,
//             }}
//           >
//             <Typography variant="h6">{style.name}</Typography>
//           </Paper>
//         ))}
//       </Stack>
//     </Box>
//   );
// }







import { Box, Paper, Typography, Grid } from "@mui/material";

const glassStyles = [
  // 1️⃣ Soft Glass
  {
    name: "Soft Glass",
    sx: {
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.18)"
    }
  },
  // 2️⃣ Strong Frosted Glass
  {
    name: "Frosted Glass",
    sx: {
      background: "rgba(255,255,255,0.18)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.25)"
    }
  },
  // 3️⃣ Dark Glass
  {
    name: "Dark Glass",
    sx: {
      background: "rgba(0,0,0,0.35)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#fff"
    }
  },
  // 4️⃣ Colored Glass
  {
    name: "Colored Glass",
    sx: {
      background: "rgba(102,126,234,0.25)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "#fff"
    }
  },
  // 5️⃣ Glass With Glow
  {
    name: "Glow Glass",
    sx: {
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 0 30px rgba(255,255,255,0.25)"
    }
  },
  // 6️⃣ Premium Glass
  {
    name: "Premium Glass",
    sx: {
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "2px solid transparent",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
    }
  },
  // 7️⃣ Neon Glass
  {
    name: "Neon Glass",
    sx: {
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(0,255,255,0.3)",
      boxShadow: "0 0 20px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.1)",
      color: "#00ffff"
    }
  },
  // 8️⃣ Holographic Glass
  {
    name: "Holographic Glass",
    sx: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 8px 32px rgba(31,38,135,0.15)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        animation: "shimmer 3s infinite"
      },
      "@keyframes shimmer": {
        "0%": { left: "-100%" },
        "100%": { left: "100%" }
      }
    }
  },
  // 9️⃣ Vibrant Glass
  {
    name: "Vibrant Glass",
    sx: {
      background: "linear-gradient(135deg, rgba(255,20,147,0.2), rgba(138,43,226,0.2))",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 8px 32px rgba(138,43,226,0.2)",
      color: "#fff"
    }
  }
];

export default function GlassEffect() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(138,43,226,0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "-10%",
          left: "-10%",
          animation: "float 20s ease-in-out infinite",
          filter: "blur(60px)"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(102,126,234,0.35) 0%, transparent 70%)",
          borderRadius: "50%",
          bottom: "-15%",
          right: "-15%",
          animation: "float 25s ease-in-out infinite reverse",
          filter: "blur(80px)"
        },
        "@keyframes float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" }
        }
      }}
    >
      {/* Animated Background Orbs */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,20,147,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 15s ease-in-out infinite",
          filter: "blur(70px)",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1)" },
            "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" }
          }
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(0,255,255,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "70%",
          left: "30%",
          animation: "float 18s ease-in-out infinite",
          filter: "blur(65px)"
        }}
      />

      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          textAlign: "center",
          marginBottom: 5,
          fontWeight: 700,
          textShadow: "0 0 40px rgba(255,255,255,0.3)",
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}
      >
        Glassmorphism effect showcase
      </Typography>
      
      <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }}>
        {glassStyles.map((style, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                padding: 4,
                borderRadius: 4,
                minHeight: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 20px 60px rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.4)"
                },
                ...style.sx
              }}
            >
              {/* <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 2,
                  fontSize: "24px",
                  transition: "all 0.3s ease",
                  "& .MuiPaper-root:hover &": {
                    transform: "rotate(360deg) scale(1.1)"
                  }
                }}
              >
                ✨
              </Box> */}
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  marginBottom: 1,
                  letterSpacing: "0.5px"
                }}
              >
                {style.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.85,
                  fontSize: "0.85rem",
                  maxWidth: "220px"
                }}
              >
                Modern glassmorphism design
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}