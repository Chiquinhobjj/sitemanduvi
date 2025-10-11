import { motion } from 'framer-motion'
import { Linkedin, ExternalLink } from 'lucide-react'
import SocialMediaPageTemplate from './SocialMediaPageTemplate'

const LinkedInPage = () => {
  return (
    <SocialMediaPageTemplate
      title="LinkedIn"
      handle="Instituto Manduvi"
      icon={Linkedin}
      color="from-blue-700 to-blue-900"
      url="https://www.linkedin.com/company/institutomanduvi/"
      description="Conecte-se profissionalmente e acompanhe nosso impacto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Networking Profissional</h4>
          <p className="text-sm text-foreground/70">
            Conecte-se com nossa rede de profissionais e parceiros
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6">
          <h4 className="font-semibold text-foreground mb-2">Impacto Social</h4>
          <p className="text-sm text-foreground/70">
            Acompanhe nossos relatórios de impacto e conquistas
          </p>
        </div>
      </div>
    </SocialMediaPageTemplate>
  )
}

export default LinkedInPage