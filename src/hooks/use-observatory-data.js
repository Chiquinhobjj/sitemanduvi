import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getComplianceHighlights,
  getDataSources,
  getInstituteIndicators,
  getIntegrationFlow,
  getProjectIndicators,
  getProjectInsights,
  getProjectList,
  getProjectTrend,
  getTrendSeries
} from '@/lib/observatoryClient'
import { findDefaultProjectById, observatoryDefaults } from '@/data/observatory'

const defaultProject = observatoryDefaults.projects[0] ?? null

const buildProjectFromFallback = (project) => {
  if (!project) {
    return null
  }

  const fallback = findDefaultProjectById(project.id) ?? {}
  return {
    ...fallback,
    ...project,
    indicators: fallback.indicators ?? project.indicators ?? [],
    trend: fallback.trend ?? project.trend ?? [],
    insights: fallback.insights ?? project.insights ?? []
  }
}

export function useObservatoryData() {
  const [loading, setLoading] = useState(true)
  const [projectLoading, setProjectLoading] = useState(false)
  const [error, setError] = useState(null)

  const [instituteIndicators, setInstituteIndicators] = useState(
    observatoryDefaults.instituteIndicators
  )
  const [trendSeries, setTrendSeries] = useState(observatoryDefaults.trendSeries)
  const [projects, setProjects] = useState(
    observatoryDefaults.projects.map(buildProjectFromFallback)
  )
  const [dataSources, setDataSources] = useState(observatoryDefaults.dataSources)
  const [integrationFlow, setIntegrationFlow] = useState(observatoryDefaults.integrationFlow)
  const [complianceHighlights, setComplianceHighlights] = useState(
    observatoryDefaults.complianceHighlights
  )

  const [selectedProjectId, setSelectedProjectId] = useState(defaultProject?.id ?? '')
  const [projectIndicators, setProjectIndicators] = useState(defaultProject?.indicators ?? [])
  const [projectTrend, setProjectTrend] = useState(defaultProject?.trend ?? [])
  const [projectInsights, setProjectInsights] = useState(defaultProject?.insights ?? [])

  useEffect(() => {
    let cancelled = false

    const loadInitialData = async () => {
      setLoading(true)
      setError(null)

      try {
        const controller = new AbortController()
        const signal = controller.signal

        const [
          instituteResponse,
          trendResponse,
          projectResponse,
          sourcesResponse,
          flowResponse,
          complianceResponse
        ] = await Promise.all([
          getInstituteIndicators({ signal }),
          getTrendSeries({ signal }),
          getProjectList({ signal }),
          getDataSources({ signal }),
          getIntegrationFlow({ signal }),
          getComplianceHighlights({ signal })
        ])

        if (cancelled) {
          return
        }

        if (Array.isArray(instituteResponse) && instituteResponse.length) {
          setInstituteIndicators(instituteResponse)
        }

        if (Array.isArray(trendResponse) && trendResponse.length) {
          setTrendSeries(trendResponse)
        }

        if (Array.isArray(projectResponse) && projectResponse.length) {
          const enriched = projectResponse.map(buildProjectFromFallback)
          setProjects(enriched)
          const firstProject = enriched[0]
          if (firstProject) {
            setSelectedProjectId(firstProject.id)
          }
        }

        if (Array.isArray(sourcesResponse) && sourcesResponse.length) {
          setDataSources(sourcesResponse)
        }

        if (Array.isArray(flowResponse) && flowResponse.length) {
          setIntegrationFlow(flowResponse)
        }

        if (Array.isArray(complianceResponse) && complianceResponse.length) {
          setComplianceHighlights(complianceResponse)
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Falha ao carregar dados do observatório', err)
          setError('Não foi possível atualizar todos os dados agora. Exibindo última versão disponível.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadInitialData()

    return () => {
      cancelled = true
    }
  }, [])

  const selectedProject = useMemo(() => {
    if (!selectedProjectId) {
      return null
    }

    return (
      projects.find((project) => project?.id === selectedProjectId) ??
      buildProjectFromFallback(findDefaultProjectById(selectedProjectId))
    )
  }, [projects, selectedProjectId])

  useEffect(() => {
    if (!selectedProjectId) {
      return
    }

    let cancelled = false

    const loadProjectData = async () => {
      setProjectLoading(true)

      const fallbackProject = buildProjectFromFallback(findDefaultProjectById(selectedProjectId))

      try {
        const controller = new AbortController()
        const signal = controller.signal

        const [indicatorsResponse, trendResponse, insightsResponse] = await Promise.all([
          getProjectIndicators(selectedProjectId, { signal }),
          getProjectTrend(selectedProjectId, { signal }),
          getProjectInsights(selectedProjectId, { signal })
        ])

        if (cancelled) {
          return
        }

        setProjectIndicators(
          Array.isArray(indicatorsResponse) && indicatorsResponse.length
            ? indicatorsResponse
            : fallbackProject?.indicators ?? []
        )
        setProjectTrend(
          Array.isArray(trendResponse) && trendResponse.length
            ? trendResponse
            : fallbackProject?.trend ?? []
        )
        setProjectInsights(
          Array.isArray(insightsResponse) && insightsResponse.length
            ? insightsResponse
            : fallbackProject?.insights ?? []
        )
      } catch (err) {
        if (!cancelled) {
          console.warn('Não foi possível atualizar dados do projeto selecionado', err)
          setError('Dados do projeto podem estar desatualizados. Consulte a equipe de dados para confirmar.')
          setProjectIndicators(fallbackProject?.indicators ?? [])
          setProjectTrend(fallbackProject?.trend ?? [])
          setProjectInsights(fallbackProject?.insights ?? [])
        }
      } finally {
        if (!cancelled) {
          setProjectLoading(false)
        }
      }
    }

    loadProjectData()

    return () => {
      cancelled = true
    }
  }, [selectedProjectId])

  const selectProject = useCallback((projectId) => {
    setSelectedProjectId(projectId)
  }, [])

  return {
    loading,
    projectLoading,
    error,
    instituteIndicators,
    trendSeries,
    projects,
    dataSources,
    integrationFlow,
    complianceHighlights,
    selectedProject,
    selectedProjectId,
    projectIndicators,
    projectTrend,
    projectInsights,
    selectProject
  }
}
