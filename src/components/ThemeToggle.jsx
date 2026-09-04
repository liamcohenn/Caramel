import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function leerTemaGuardado() {
  try {
    return localStorage.getItem('tema')
  } catch {
    return null
  }
}

function ThemeToggle() {
  const [tema, setTema] = useState(leerTemaGuardado)

  useEffect(() => {
    if (tema) {
      document.documentElement.setAttribute('data-theme', tema)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [tema])

  function alternarTema() {
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
    const temaActual = tema ?? (prefiereOscuro ? 'dark' : 'light')
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark'
    setTema(nuevoTema)
    try {
      localStorage.setItem('tema', nuevoTema)
    } catch {
      // sin localStorage disponible el tema no persiste, pero sigue funcionando en esta sesión
    }
  }

  const prefiereOscuroSistema = window.matchMedia('(prefers-color-scheme: dark)').matches
  const modoOscuro = tema ? tema === 'dark' : prefiereOscuroSistema

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={alternarTema}
      aria-label="Cambiar entre modo claro y oscuro"
    >
      {modoOscuro ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default ThemeToggle
