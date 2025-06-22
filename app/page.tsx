import { HomePageComponent, generateHomeMetadata } from './components/home/Page'

export async function generateMetadata() {
  return await generateHomeMetadata('ja');
}

export default async function Home() {
  return <HomePageComponent lang="ja" />;
} 
