import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import {
  DatePicker,
  DateRangePicker,
  DateMultiPicker,
} from "./date-picker";
import { Calendar } from "./calendar";

const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker,
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Single: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} />;
  },
  parameters: {
    docs: {
      source: {
        code: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<DatePicker value={date} onChange={setDate} />`,
      },
    },
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DatePicker value={date} onChange={setDate} placeholder="Select your birthday" />;
  },
  parameters: {
    docs: {
      source: {
        code: `const [date, setDate] = React.useState<Date | undefined>();

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select your birthday"
/>`,
      },
    },
  },
};

export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} dateFormat="dd/MM/yyyy" />;
  },
  parameters: {
    docs: {
      source: {
        code: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<DatePicker value={date} onChange={setDate} dateFormat="dd/MM/yyyy" />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => <DatePicker value={new Date()} disabled />,
  parameters: {
    docs: {
      source: {
        code: `<DatePicker value={new Date()} disabled />`,
      },
    },
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    });
    return <DateRangePicker value={range} onChange={setRange} />;
  },
  parameters: {
    docs: {
      source: {
        code: `const [range, setRange] = React.useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 7),
});

<DateRangePicker value={range} onChange={setRange} />`,
      },
    },
  },
};

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);
    return <DateMultiPicker value={dates} onChange={setDates} max={5} />;
  },
  parameters: {
    docs: {
      source: {
        code: `const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);

<DateMultiPicker value={dates} onChange={setDates} max={5} />`,
      },
    },
  },
};

export const InlineCalendar: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <div className="rounded-md border inline-block">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `const [date, setDate] = React.useState<Date | undefined>(new Date());

<div className="rounded-md border inline-block">
  <Calendar mode="single" selected={date} onSelect={setDate} />
</div>`,
      },
    },
  },
};
