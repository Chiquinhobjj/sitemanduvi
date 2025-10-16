import './App.css'
import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import FloatingNav from './components/layout/FloatingNav'
import HeroSection from './components/sections/HeroSection'

const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const TechStackSection = lazy(() => import('./components/sections/TechStackSection'))
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))
const DataObservatorySection = lazy(() => import('./components/sections/DataObservatorySection'))
const ObservatoryUserPanel = lazy(() => import('./components/sections/ObservatoryUserPanel'))
const SeciteciPanel = lazy(() => import('./components/sections/SeciteciPanel'))
const InitiativeDetail = lazy(() => import('./components/sections/InitiativeDetail'))
const EventsSection = lazy(() => import('./components/sections/EventsSection'))
const SuperralinhaEvent = lazy(() => import('./components/sections/SuperralinhaEvent'))
const RedesSection = lazy(() => import('./components/sections/RedesSection'))
const InstagramPage = lazy(() => import('./components/sections/InstagramPage'))
const FacebookPage = lazy(() => import('./components/sections/FacebookPage'))
const LinkedInPage = lazy(() => import('./components/sections/LinkedInPage'))
const TikTokPage = lazy(() => import('./components/sections/TikTokPage'))
const TwitterPage = lazy(() => import('./components/sections/TwitterPage'))
const Footer = lazy(() => import('./components/layout/Footer'))

const SectionFallback = ({ height = '40vh' }) => (
  <div
    className="my-16 h-full min-h-[200px] w-full animate-pulse rounded-3xl bg-muted/30"
    style={{ height }}
  />
)

const PageSection = ({ children }) => (
  <div className="pt-12 md:pt-20 space-y-24">
    {children}
  </div>
)

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

const HomePage = () => <HeroSection />

const AboutPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="50vh" />}>
      <AboutSection />
    </Suspense>
  </PageSection>
)

const SkillsPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <SkillsSection />
    </Suspense>
    <Suspense fallback={<SectionFallback height="50vh" />}>
      <TechStackSection />
    </Suspense>
  </PageSection>
)

const ProjectsPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <ProjectsSection />
    </Suspense>
  </PageSection>
)

const ObservatoryPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="70vh" />}>
      <DataObservatorySection />
    </Suspense>
  </PageSection>
)

const ObservatoryUsersPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="70vh" />}>
      <ObservatoryUserPanel />
    </Suspense>
  </PageSection>
)

const SeciteciPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="80vh" />}>
      <SeciteciPanel />
    </Suspense>
  </PageSection>
)

const AchievementsPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="50vh" />}>
      <AchievementsSection />
    </Suspense>
  </PageSection>
)

const ContactPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="55vh" />}>
      <ContactSection />
    </Suspense>
  </PageSection>
)

const EventsPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <EventsSection />
    </Suspense>
  </PageSection>
)

const SuperralinhaPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <SuperralinhaEvent />
    </Suspense>
  </PageSection>
)

const InitiativeDetailPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <InitiativeDetail />
    </Suspense>
  </PageSection>
)

const RedesPage = () => (
  <PageSection>
    <Suspense fallback={<SectionFallback height="60vh" />}>
      <RedesSection />
    </Suspense>
  </PageSection>
)

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <FloatingNav />
      <ScrollToTop />
      <main className="flex-1 pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:initiativeId" element={<InitiativeDetailPage />} />
          <Route path="/observatorio" element={<ObservatoryPage />} />
          <Route path="/observatorio/usuarios" element={<ObservatoryUsersPage />} />
          <Route path="/observatorio/seciteci-mt" element={<SeciteciPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/superralinha" element={<SuperralinhaPage />} />
          <Route path="/redes" element={<RedesPage />} />
          <Route path="/redes/instagram" element={<InstagramPage />} />
          <Route path="/redes/facebook" element={<FacebookPage />} />
          <Route path="/redes/linkedin" element={<LinkedInPage />} />
          <Route path="/redes/tiktok" element={<TikTokPage />} />
          <Route path="/redes/twitter" element={<TwitterPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Suspense fallback={<SectionFallback height="30vh" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
