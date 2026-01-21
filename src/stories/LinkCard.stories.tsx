import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { LinkCard } from '../components/LinkCard';

const meta = {
  title: 'LinkCard',
  component: LinkCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        black: { name: 'Black', value: '#0f0f0f' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Highlighted: Story = {
  args: {
    title: 'Participate at Focșani Tech Challenge League Meet!',
    displayLink: 'brickbot.ro/meet',
    highlighted: true,
  },
};

export const Default: Story = {
  args: {
    title: 'Submit Your FTC Portfolio!',
    displayLink: 'brickbot.ro/submit-portfolio',
    highlighted: false,
    icon: (
      <div
        className="h-(--icon-size) w-(--icon-size) bg-(--text) p-[-0.5rem]"
        style={{
          WebkitMaskImage: 'url(/the-vault-icon.svg)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskImage: 'url(/the-vault-icon.svg)',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'contain',
        }}
      />
    ),
  },
};

export const Column_Display: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-1 w-full h-full gap-[2rem] max-w-[20rem]">
        <LinkCard
          title="Participate at Focșani Tech Challenge League Meet!"
          displayLink="brickbot.ro/meet"
          highlighted={true}
        />
        <LinkCard
          title="Submit Your FTC Portfolio!"
          displayLink="brickbot.ro/submit-portfolio"
          highlighted={false}
          icon={
            <div
              className="
                h-(--icon-size)
                w-(--icon-size)
                bg-(--text)
                p-[-0.5rem]
              "
              style={{
                WebkitMaskImage: 'url(/the-vault-icon.svg)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskImage: 'url(/the-vault-icon.svg)',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
              }}
            />
          }
        />
      </div>
    );
  },
};
