"use client";
import React from "react";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,

  WhatsappIcon,
} from "react-share";

import LinkIcon from "@mui/icons-material/Link";
import { IconButton, Tooltip, Box } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

const SocialMediaShare = () => {
  const url: string = typeof window !== "undefined" ? window.location.href : "";
  const [open, setOpen] = React.useState(false);

  const copyToClipboard = () => {
    const utmUrl = generateUtmUrl(url, "direct_copy")
    navigator.clipboard.writeText(utmUrl);
    setOpen(true);
  };

  const generateUtmUrl = (baseUrl: string, source: string) => {
    const utmParams = new URLSearchParams({
      utm_source: source,
      utm_medium: "social",
      utm_campaign: "content_share"
    })
    return `${baseUrl}?${utmParams.toString()}`
  }

  return (
    <>
    <Box sx={{ marginTop: 2 }}>
      <p style={{ fontWeight: "bold", marginBottom: 8 }}>Liked it? Share with your friends:</p>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        <Tooltip title="Facebook">
          <FacebookShareButton url={generateUtmUrl(url, "facebook")}>
            <FacebookIcon size={28} round />
          </FacebookShareButton>
        </Tooltip>
        <Tooltip title="Messenger">
          <FacebookMessengerShareButton appId="123" url={generateUtmUrl(url, "facebookMessenger")}>
            <FacebookMessengerIcon size={28} round />
          </FacebookMessengerShareButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <LinkedinShareButton url={generateUtmUrl(url, "linkedin")}>
            <LinkedinIcon size={28} round />
          </LinkedinShareButton>
        </Tooltip>

        <Tooltip title="Reddit">
          <RedditShareButton url={generateUtmUrl(url, "reddit")}>
            <RedditIcon size={28} round />
          </RedditShareButton>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <WhatsappShareButton url={generateUtmUrl(url, "whatsApp")}>
            <WhatsappIcon size={28} round />
          </WhatsappShareButton>
        </Tooltip>

        <Tooltip title="Copy Link">
          <IconButton onClick={copyToClipboard} sx={{ borderRadius: "50%", padding: 0 }}>
            <LinkIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
    <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={() => setOpen(false)}
    message="Link copied to clipboard!"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  />
  </>
  );
};

export default SocialMediaShare;
