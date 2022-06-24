import { RocketseatLogo } from './RocketseatLogo'

export function Footer () {
  return (
    <footer className="w-full bg-gray-700 flex justify-center items-start">
      <div className="w-full mx-12 py-4 h-full flex items-center justify-between border-t border-gray-600 text-gray-300">
        <div className="flex gap-6 items-center justify-center">
          <RocketseatLogo />
          <small>
            Rocketseat - Todos os direitos reservados
          </small>
        </div>
        <small>
          Políticas de privacidade
        </small>
      </div>
    </footer>
  )
}
