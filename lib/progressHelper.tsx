import { Progress } from "@/components/ui/progress";

export function getProgressPercentage(status: string) {
  switch (status) {
    case "Preparing":
      return 20;
    case "In Transit":
      return 50;
    case "Out For Delivery":
      return 80;
    case "Delivered":
      return 100;
    default:
      return 0;
  }
}