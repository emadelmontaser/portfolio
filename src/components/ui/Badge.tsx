export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded">{children}</span>
}
