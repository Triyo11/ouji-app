import UserActionButton from './UserActionButton'

const Navbar = () => {
  return (
    <header className="bg-[var(--background)] dark:bg-[var(--foreground)] w-full h-16 flex justify-between items-center justify-content-center px-8">
      <h1 className="text-3xl font-bold text-[var(--accent)]">Ouji</h1>
      <UserActionButton />
    </header>
  )
}

export default Navbar