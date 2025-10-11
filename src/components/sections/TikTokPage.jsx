import { motion } from 'framer-motion'
import { MessageSquare, ExternalLink } from 'lucide-react'
import SocialMediaPageTemplate from './SocialMediaPageTemplate'

const TikTokPage = () => {
  return (
    <SocialMediaPageTemplate
      title="TikTok"
      handle="@institutomanduvi"
      icon={MessageSquare}
      color="from-gray-800 to-gray-900"
      url="https://www.tiktok.com/@institutomanduvi"
      description="Conteúdo em vídeo e tendências"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Conteúdo Educativo</h4>
          <p className="text-sm text-foreground/70">
            Vídeos sobre nossos projetos, metodologias e impacto social
          </p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Depoimentos</h4>
          <p className="text-sm text-foreground/70">
            Histórias reais de transformação e conquistas
          </p>
        </div>
      </div>
    </SocialMediaPageTemplate>
  )
}

export default TikTokPage