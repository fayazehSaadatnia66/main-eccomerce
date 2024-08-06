const AuthLayout = ({ children }: {children:React.ReactNode}) => {
  return (
    <div>
      {/* <nav className="bg-red-500 text-white">this is auth navbar</nav> */}
      <div className="min-h-screen flex items-center justify-center bg-sky-500">
      {children}
      </div>
    </div>
  )
}

export default AuthLayout
