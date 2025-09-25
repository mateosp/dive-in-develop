import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="relative min-h-screen text-gray-900">
      <main className="relative z-20">
        <Outlet />
      </main>
    </div>
  )
}