import UserActionButton from './UserActionButton'

const Navbar = () => {
  return (
    <header className="bg-scheme-1-background/0 w-full h-16 flex justify-between items-center justify-content-center px-8">
      <h1 className="text-3xl font-bold text-scheme-1-foreground">Ouji</h1>
      <UserActionButton />
    </header>
  )
}

export default Navbar