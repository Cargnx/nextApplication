import UnderConstruction from "@/components/ui/UnderConstruction";
import { pageStatus } from "@/config/page";

export default function Calendar() {
  if (!pageStatus.calendar) {
    return <UnderConstruction pageName="Calendar page" />;
  }

  return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-8">
        <span className="text-6xl">IT'S LIVE</span>
      </div>
  );
}
