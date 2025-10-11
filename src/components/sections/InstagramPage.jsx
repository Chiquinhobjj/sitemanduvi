import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
import SocialMediaPageTemplate from './SocialMediaPageTemplate'
import { socialNetworks } from '@/data/socialNetworks.js'

const InstagramPage = () => {
  const instagramData = socialNetworks.find(network => network.id === 'instagram')

  return (
    <SocialMediaPageTemplate
      title="Instagram"
      handle="@institutomanduvi"
      icon={Instagram}
      color="from-pink-500 to-purple-600"
      url="https://www.instagram.com/institutomanduvi/"
      description="Acompanhe nosso dia a dia, projetos e conquistas através de fotos e vídeos"
    >
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-foreground">Nossas Contas do Instagram</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instagramData.accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-border/30 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">{account.name}</h5>
                  <p className="text-sm text-foreground/70">{account.handle}</p>
                </div>
              </div>
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Seguir
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SocialMediaPageTemplate>
  )
}

export default InstagramPage