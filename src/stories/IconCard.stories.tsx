import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconCard } from "../components/IconCard";
import {
  CiFacebook,
  CiGlobe,
  CiInstagram,
  CiLinkedin,
  CiMail,
} from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiTiktokLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

const meta: Meta<typeof IconCard> = {
  title: "IconCard",
  component: IconCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        black: { name: "Black", value: "#0f0f0f" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Website: Story = {
  args: {},
  render: () => (
    <IconCard>
      <CiGlobe className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
    </IconCard>
  ),
};

export const Instagram: Story = {
  args: {},
  render: () => (
    <IconCard>
      <CiInstagram className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
    </IconCard>
  ),
};

export const IconGrid: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-4 gap-[2rem]">
      <a
        href="https://brickbot.ro/en"
        target="_blank"
        aria-description="Team Website"
      >
        <IconCard>
          <CiGlobe className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://www.instagram.com/brickbotcnu/"
        target="_blank"
        aria-description="Team Instagram"
      >
        <IconCard>
          <CiInstagram className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://www.facebook.com/brickbotcnu/"
        target="_blank"
        aria-description="Team Facebook"
      >
        <IconCard>
          <CiFacebook className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://www.tiktok.com/@brickbotcnu"
        target="_blank"
        aria-description="Team TikTok"
      >
        <IconCard>
          <PiTiktokLogoLight className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://www.linkedin.com/company/brickbot/"
        target="_blank"
        aria-description="Team LinkedIn"
      >
        <IconCard>
          <CiLinkedin className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="mailto:brickbot@liceulunirea.ro"
        target="_blank"
        aria-description="Team Email"
      >
        <IconCard>
          <CiMail className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
        target="_blank"
        aria-description="Team YouTube"
      >
        <IconCard>
          <PiYoutubeLogoLight className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
      <a
        href="https://github.com/BrickBot15996"
        target="_blank"
        aria-description="Team GitHub"
      >
        <IconCard>
          <VscGithubAlt className="h-[2rem] w-[2rem] fill-[#f8f8f8]" />
        </IconCard>
      </a>
    </div>
  ),
};
