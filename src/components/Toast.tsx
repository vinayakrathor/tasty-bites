import { useApp } from '../AppContext'

export default function Toast() {
  const { toast } = useApp()

  return (
    <div className={`fixed bottom-8 left-8 bg-green-500 text-white px-6 py-4 rounded-xl flex items-center gap-2.5 shadow-xl z-[10000] transition-all duration-300 ${toast.visible ? 'translate-x-0' : '-translate-x-[150%]'}`}>
      <i className="fas fa-check-circle" />
      <span>{toast.message}</span>
    </div>
  )
}
