import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onHandleSetOnAll,
  onHandleSetOffAll,
  lightsOn,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        lightsOn={lightsOn}
        onHandleSetOnAll={onHandleSetOnAll}
        onHandleSetOffAll={onHandleSetOffAll}
      />
    </>
  );
}
