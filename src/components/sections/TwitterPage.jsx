import { motion } from 'framer-motion'
import { MessageSquare, ExternalLink } from 'lucide-react'
import SocialMediaPageTemplate from './SocialMediaPageTemplate'

const TwitterPage = () => {
  return (
    <SocialMediaPageTemplate
      title="Twitter"
      handle="@imanduvi"
      icon={MessageSquare}
      color="from-blue-400 to-blue-600"
      url="https://x.com/imanduvi"
      description="Notícias e atualizações em tempo real"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Notícias</h4>
          <p className="text-sm text-foreground/70">
            Atualizações sobre nossos projetos e conquistas
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Insights</h4>
          <p className="text-sm text-foreground/70">
            Reflexões sobre impacto social e desenvolvimento sustentável
          </p>
        </div>
      </div>
    </SocialMediaPageTemplate>
  )
}

export default TwitterPage