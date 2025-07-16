import UnderConstruction from "@/components/ui/UnderConstruction";
import { pageStatus } from "@/config/page";

export default function Settings() {
  if (!pageStatus.settings) {
    return <UnderConstruction pageName="Settings page" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-8">
      <span className="text-6xl">IT'S LIVE</span>
    </div>
  );
}
