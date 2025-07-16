import UnderConstruction from "@/components/ui/UnderConstruction";
import { pageStatus } from "@/config/page";

export default function About() {
  if (!pageStatus.about) {
    return <UnderConstruction pageName="About page" />;
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  );
}
