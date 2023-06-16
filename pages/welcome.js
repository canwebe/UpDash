import Link from 'next/link'

export default function Welcome() {
  return (
    <>
      <h1>This is Welcome Page</h1>
      <Link href="/login">Get Started</Link>
    </>
  )
}
