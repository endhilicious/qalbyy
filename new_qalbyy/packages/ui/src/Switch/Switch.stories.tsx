import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch, CompactSwitch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper
function SwitchDemo(args: any) {
  const [checked, setChecked] = useState(args.checked || false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
}

export const Default: Story = {
  render: (args) => <SwitchDemo {...args} />,
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Enable Notifications"
        description="Receive notifications about your account activity"
      />
    );
  },
};

export const AcakSoalExample: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="p-4 bg-white rounded-lg border">
        <Switch
          id="randomize_questions"
          checked={checked}
          onChange={setChecked}
          label="Acak Soal"
          description="Soal akan diacak per folder saat siswa ujian"
          color="teal"
        />
      </div>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [blue, setBlue] = useState(true);
    const [green, setGreen] = useState(true);
    const [purple, setPurple] = useState(true);
    const [red, setRed] = useState(true);
    const [teal, setTeal] = useState(true);
    
    return (
      <div className="space-y-4 p-4">
        <Switch checked={blue} onChange={setBlue} color="blue" label="Blue Switch" />
        <Switch checked={green} onChange={setGreen} color="green" label="Green Switch" />
        <Switch checked={purple} onChange={setPurple} color="purple" label="Purple Switch" />
        <Switch checked={red} onChange={setRed} color="red" label="Red Switch" />
        <Switch checked={teal} onChange={setTeal} color="teal" label="Teal Switch" />
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [sm, setSm] = useState(true);
    const [md, setMd] = useState(true);
    const [lg, setLg] = useState(true);
    
    return (
      <div className="space-y-4 p-4">
        <Switch checked={sm} onChange={setSm} size="sm" label="Small" />
        <Switch checked={md} onChange={setMd} size="md" label="Medium (default)" />
        <Switch checked={lg} onChange={setLg} size="lg" label="Large" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Switch checked={false} onChange={() => {}} disabled label="Disabled Off" />
      <Switch checked={true} onChange={() => {}} disabled label="Disabled On" />
    </div>
  ),
};

export const CompactVariant: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <CompactSwitch checked={checked} onChange={setChecked} label="Compact Switch" />;
  },
};

export const SettingsExample: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sound, setSound] = useState(true);
    const [notifications, setNotifications] = useState(true);
    
    return (
      <div className="w-80 p-6 bg-white rounded-lg border space-y-6">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        
        <Switch
          id="dark-mode"
          checked={darkMode}
          onChange={setDarkMode}
          label="Dark Mode"
          description="Use dark theme across the app"
          color="blue"
        />
        
        <Switch
          id="sound-effect"
          checked={sound}
          onChange={setSound}
          label="Sound Effect"
          description="Play sounds for notifications"
          color="purple"
        />
        
        <Switch
          id="notifications"
          checked={notifications}
          onChange={setNotifications}
          label="Notifications"
          description="Receive push notifications"
          color="green"
        />
      </div>
    );
  },
};