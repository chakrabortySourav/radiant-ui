import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, toast } from "./sonner";
import { Button } from "./button";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
};
export default meta;
type Story = StoryObj<typeof Toaster>;

const code = (call: string) => `import { Toaster, toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <>
      <Button onClick={() => ${call}}>Show toast</Button>
      <Toaster />
    </>
  );
}`;

export const Default: Story = {
  render: () => (
    <>
      <Button onClick={() => toast("Event has been created")}>Show toast</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast("Event has been created")`) } } },
};

export const Success: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success("Profile updated successfully")}>Success</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast.success("Profile updated successfully")`) } } },
};

export const ErrorToast: Story = {
  name: "Error",
  render: () => (
    <>
      <Button onClick={() => toast.error("Something went wrong")}>Error</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast.error("Something went wrong")`) } } },
};

export const Info: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.info("New version available")}>Info</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast.info("New version available")`) } } },
};

export const Warning: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.warning("Storage almost full")}>Warning</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast.warning("Storage almost full")`) } } },
};

export const WithDescription: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2026 at 9:00 AM",
          })
        }
      >
        With description
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: code(`toast("Event has been created", {
          description: "Sunday, December 03, 2026 at 9:00 AM",
        })`),
      },
    },
  },
};

export const WithAction: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            action: { label: "Undo", onClick: () => console.log("Undo") },
          })
        }
      >
        With action
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: code(`toast("Event has been created", {
          action: { label: "Undo", onClick: () => console.log("Undo") },
        })`),
      },
    },
  },
};

export const PromiseToast: Story = {
  name: "Promise",
  render: () => (
    <>
      <Button
        onClick={() => {
          const p = new Promise<{ name: string }>((resolve) =>
            setTimeout(() => resolve({ name: "Sonner" }), 1500),
          );
          toast.promise(p, {
            loading: "Loading...",
            success: (data: { name: string }) => `${data.name} toast has been added`,
            error: "Error",
          });
        }}
      >
        Promise
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { Toaster, toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const handleClick = () => {
    const p = new Promise<{ name: string }>((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 1500),
    );
    toast.promise(p, {
      loading: "Loading...",
      success: (data) => \`\${data.name} toast has been added\`,
      error: "Error",
    });
  };
  return (
    <>
      <Button onClick={handleClick}>Promise</Button>
      <Toaster />
    </>
  );
}`,
      },
    },
  },
};

export const Loading: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.loading("Uploading file...")}>Loading</Button>
      <Toaster />
    </>
  ),
  parameters: { docs: { source: { code: code(`toast.loading("Uploading file...")`) } } },
};

export const RichColors: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success("Rich colored success")}>Rich colors</Button>
      <Toaster richColors />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { Toaster, toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <>
      <Button onClick={() => toast.success("Rich colored success")}>Rich colors</Button>
      <Toaster richColors />
    </>
  );
}`,
      },
    },
  },
};

export const Position: Story = {
  render: () => (
    <>
      <div className="flex flex-wrap gap-2">
        {(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"] as const).map((p) => (
          <Button key={p} onClick={() => toast(`Position: ${p}`)}>
            {p}
          </Button>
        ))}
      </div>
      <Toaster position="top-right" />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { Toaster, toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <>
      <Button onClick={() => toast("Hello")}>Show toast</Button>
      <Toaster position="top-right" />
    </>
  );
}`,
      },
    },
  },
};
