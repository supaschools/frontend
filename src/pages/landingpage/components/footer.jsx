import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000207",
        color: "white",
        py: 8,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "white",
                fontSize: "24px",
                fontWeight: "normal",
              }}
            >
              SupaSchools
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "gray.400",
                mb: 3,
                fontSize: "16px",
              }}
            >
              Transforming education with AI-powered personalization
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link href="#" color="inherit">
                <TwitterIcon
                  sx={{ fontSize: 20, "&:hover": { color: "#407BFF" } }}
                />
              </Link>
              <Link href="#" color="inherit">
                <LinkedInIcon
                  sx={{ fontSize: 20, "&:hover": { color: "#407BFF" } }}
                />
              </Link>
              <Link href="#" color="inherit">
                <YouTubeIcon
                  sx={{ fontSize: 20, "&:hover": { color: "#407BFF" } }}
                />
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "white",
                fontSize: "24px",
                fontWeight: "normal",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link
                href="/about"
                color="inherit"
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  "&:hover": { color: "#407BFF" },
                }}
              >
                About Us
              </Link>
              <Link
                href="/features"
                color="inherit"
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  "&:hover": { color: "#407BFF" },
                }}
              >
                Features
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "white",
                fontSize: "24px",
                fontWeight: "normal",
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "#407BFF", fontSize: 20 }} />
              <Link
                href="mailto:rishav@supaschools.com"
                color="inherit"
                sx={{
                  textDecoration: "none",
                  fontSize: "16px",
                  "&:hover": { color: "#407BFF" },
                }}
              >
                rishav@supaschools.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            mt: 8,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "gray.400",
              fontSize: "14px",
            }}
          >
            © {new Date().getFullYear()} SupaSchools. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
