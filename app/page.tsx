import Link from "next/link"

const examples = [
  {
    id: "j2308jq",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="p-24 text-lg">Creatopy challenge</h1>

      <nav>
        <p>Navigate to:</p>
        <ul>
          {examples.map((item, index) => (
            <li key={item.id}>
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href={`/designs/${item.id}`}
              >
                Example {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
