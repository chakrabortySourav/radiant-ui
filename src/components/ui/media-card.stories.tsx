import type { Meta, StoryObj } from "@storybook/react";
import { MediaCard } from "./card";
import thumb from "@/assets/techwave-thumb.jpg";

const meta: Meta<typeof MediaCard> = {
  title: "UI/Card/MediaCard",
  component: MediaCard,
};
export default meta;
type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  render: () => (
    <div className="max-w-sm">
      <MediaCard
        thumbnailSrc={thumb}
        thumbnailAlt="TechWave Solutions"
        title="TechWave Solutions"
        meta="Updated 2 days ago"
      />
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-3">
      <MediaCard thumbnailSrc={thumb} title="TechWave Solutions" meta="Updated 2 days ago" />
      <MediaCard thumbnailSrc={thumb} title="NovaCloud Labs" meta="Updated 5 hours ago" />
      <MediaCard thumbnailSrc={thumb} title="Pinnacle Studio" meta="Updated last week" />
    </div>
  ),
};
