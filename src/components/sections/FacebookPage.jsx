import { motion } from 'framer-motion'
import { Facebook, ExternalLink } from 'lucide-react'
import SocialMediaPageTemplate from './SocialMediaPageTemplate'

const FacebookPage = () => {
  return (
    <SocialMediaPageTemplate
      title="Facebook"
      handle="Instituto Manduvi"
      icon={Facebook}
      color="from-blue-600 to-blue-800"
      url="https://www.facebook.com/institutomanduvi"
      description="Conecte-se conosco e acompanhe nossas iniciativas"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Comunidade Ativa</h4>
          <p className="text-sm text-foreground/70">
            Participe de nossa comunidade e acompanhe eventos e iniciativas
          </p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Eventos</h4>
          <p className="text-sm text-foreground/70">
            Fique por dentro dos nossos eventos e atividades
          </p>
        </div>
      </div>
    </SocialMediaPageTemplate>
  )
}

export default FacebookPage