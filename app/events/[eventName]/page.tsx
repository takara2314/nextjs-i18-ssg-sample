import { EventPageComponent, generateEventMetadata, validEvents } from '../../components/events/Page'

export async function generateStaticParams() {
  return validEvents.map((eventName) => ({
    eventName
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ eventName: string }> }) {
  const { eventName } = await params;
  return await generateEventMetadata('ja', eventName);
}

export default async function EventPage({ params }: { params: Promise<{ eventName: string }> }) {
  const { eventName } = await params;
  return <EventPageComponent lang="ja" eventName={eventName} />;
}
