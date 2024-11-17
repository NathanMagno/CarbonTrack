

interface BgFuncionalidadesProps {
    children: React.ReactNode;
  }

export default function BgFuncionalidades({children}: BgFuncionalidadesProps) {
  return (
    <>
     <main className="BgFuncionalidade">
          {children}
        </main>
    </>
  )
}
