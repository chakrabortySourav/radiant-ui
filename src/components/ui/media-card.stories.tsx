import type { Meta, StoryObj } from "@storybook/react";
import {
  MediaCard,
  MediaCardThumbnail,
  MediaCardBody,
  MediaCardTitle,
  MediaCardMeta,
} from "./card";
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
      <MediaCard>
        <MediaCardThumbnail src={thumb} alt="TechWave Solutions" />
        <MediaCardBody>
          <MediaCardTitle>TechWave Solutions</MediaCardTitle>
          <MediaCardMeta>Updated 2 days ago</MediaCardMeta>
        </MediaCardBody>
      </MediaCard>
    </div>
  ),
};

export const List: Story = {
  render: () => {
    const items = [
      { title: "TechWave Solutions", meta: "Updated 2 days ago" },
      { title: "NovaCloud Labs", meta: "Updated 5 hours ago" },
      { title: "Pinnacle Studio", meta: "Updated last week" },
    ];
    return (
      <div className="flex max-w-sm flex-col gap-3">
        {items.map((item) => (
          <MediaCard key={item.title}>
            <MediaCardThumbnail src={thumb} />
            <MediaCardBody>
              <MediaCardTitle>{item.title}</MediaCardTitle>
              <MediaCardMeta>{item.meta}</MediaCardMeta>
            </MediaCardBody>
          </MediaCard>
        ))}
      </div>
    );
  },
};
