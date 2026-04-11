import TrackingClient from "./TrackingClient";

export async function generateStaticParams() {
  return [];
}

export default function Page() {
  return <TrackingClient />;
}