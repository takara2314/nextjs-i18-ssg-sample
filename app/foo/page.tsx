import { FooPageComponent, generateFooMetadata } from '../components/foo/Page'

export async function generateMetadata() {
  return await generateFooMetadata('ja');
}

export default async function FooPage() {
  return <FooPageComponent lang="ja" />;
} 
