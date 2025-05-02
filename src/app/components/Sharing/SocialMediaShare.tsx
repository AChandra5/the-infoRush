"use client";
import React from "react";
import {
//   EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
//   TelegramShareButton,
//   ThreadsShareButton,
//   TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
//   EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
//   TelegramIcon,
//   ThreadsIcon,
//   XIcon,
  WhatsappIcon,
} from "react-share";

import LinkIcon from "@mui/icons-material/Link";
import { IconButton, Tooltip, Box } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

const SocialMediaShare = () => {
  const url: string = typeof window !== "undefined" ? window.location.href : "";
  const [open, setOpen] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setOpen(true);
  };

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
        {/* <Tooltip title="Email">
          <EmailShareButton url={url}>
            <EmailIcon size={28} round />
          </EmailShareButton>
        </Tooltip> */}

        <Tooltip title="Facebook">
          <FacebookShareButton url={url}>
            <FacebookIcon size={28} round />
          </FacebookShareButton>
        </Tooltip>

        <Tooltip title="Messenger">
          <FacebookMessengerShareButton appId="123" url={url}>
            <FacebookMessengerIcon size={28} round />
          </FacebookMessengerShareButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={28} round />
          </LinkedinShareButton>
        </Tooltip>

        <Tooltip title="Reddit">
          <RedditShareButton url={url}>
            <RedditIcon size={28} round />
          </RedditShareButton>
        </Tooltip>

        {/* <Tooltip title="Telegram">
          <TelegramShareButton url={url}>
            <TelegramIcon size={28} round />
          </TelegramShareButton>
        </Tooltip> */}

        {/* <Tooltip title="Threads">
          <ThreadsShareButton url={url}>
            <ThreadsIcon size={28} round />
          </ThreadsShareButton>
        </Tooltip> */}

        {/* <Tooltip title="Twitter (X)">
          <TwitterShareButton url={url}>
            <XIcon size={28} round />
          </TwitterShareButton>
        </Tooltip> */}

        <Tooltip title="WhatsApp">
          <WhatsappShareButton url={url}>
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
