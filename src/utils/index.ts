export type SidebarItemType = {
  name: string;
  children: string[];
};

export const sidebarItems: SidebarItemType[] = [
  { name: "Trends", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tasks", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tickets", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Trends 2", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tasks 2", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tickets 2", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Trends 3", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tasks 3", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
  { name: "Tickets 3", children: ["Sub Item 1", "Sub Item 2", "Sub Item 3"] },
];

export enum Theme {
  Small = "Small",
  Large = "Large",
}
