import Link from 'next/link';
export default function Home() {
  return (
    <section>This is where the homepage goes to me
      <Link href="/me">
        me
      </Link>
    </section>
  );

}
