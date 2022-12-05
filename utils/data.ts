import todoListIcon from "../public/img/icon-todo.svg";
import calendarIcon from "../public/img/icon-calendar.svg";
import remindersIcon from "../public/img/icon-reminders.svg";
import planningIcon from "../public/img/icon-planning.svg";

export interface DropDownMenuItems {
  title: string;
  items: {
    title: string;
    icon?: string;
  }[];
}

export const company: DropDownMenuItems = {
  title: "Company",
  items: [{ title: "History" }, { title: "Our Team" }, { title: "Blog" }],
};

export const features: DropDownMenuItems = {
  title: "Features",
  items: [
    {
      title: "Todo List",
      icon: todoListIcon,
    },
    {
      title: "Calendar",
      icon: calendarIcon,
    },
    {
      title: "Reminders",
      icon: remindersIcon,
    },
    {
      title: "Planning",
      icon: planningIcon,
    },
  ],
};
