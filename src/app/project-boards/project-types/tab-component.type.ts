
export interface TabComponent {
  id: string;
  name: string;
  icon: string;
  component: any; // The component to be rendered
  isActive: boolean; // Whether the tab is active or not
  isDisabled: boolean; // Whether the tab is disabled or not
  onClick?: () => void; // Optional click handler function
}
