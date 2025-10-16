import { observatoryDefaults, findDefaultProjectById } from '@/data/observatory'

const resolvedBaseUrl =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_OBSERVATORY_API_BASE
    ? import.meta.env.VITE_OBSERVATORY_API_BASE
    : ''

const API_BASE_URL = resolvedBaseUrl.replace(/\/$/, '')

async function fetchFromApi(path, { signal } = {}) {
  if (!API_BASE_URL) {
    return null
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { signal })

    if (!response.ok) {
      console.warn(`Observatory API returned ${response.status} for ${path}`)
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.warn(`Observatory API request failed for ${path}`, error)
    return null
  }
}

export async function getInstituteIndicators(options = {}) {
  const remote = await fetchFromApi('/institute/indicators', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.indicators && Array.isArray(remote.indicators)) {
    return remote.indicators
  }

  return observatoryDefaults.instituteIndicators
}

export async function getTrendSeries(options = {}) {
  const remote = await fetchFromApi('/institute/trend', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.series && Array.isArray(remote.series)) {
    return remote.series
  }

  return observatoryDefaults.trendSeries
}

export async function getProjectList(options = {}) {
  const remote = await fetchFromApi('/projects', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.projects && Array.isArray(remote.projects)) {
    return remote.projects
  }

  return observatoryDefaults.projects.map(({ id, name, pillar, summary, coverage, focus }) => ({
    id,
    name,
    pillar,
    summary,
    coverage,
    focus
  }))
}

export async function getProjectIndicators(projectId, options = {}) {
  const remote = await fetchFromApi(`/projects/${projectId}/indicators`, options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.indicators && Array.isArray(remote.indicators)) {
    return remote.indicators
  }

  return findDefaultProjectById(projectId)?.indicators ?? []
}

export async function getProjectTrend(projectId, options = {}) {
  const remote = await fetchFromApi(`/projects/${projectId}/trend`, options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.series && Array.isArray(remote.series)) {
    return remote.series
  }

  return findDefaultProjectById(projectId)?.trend ?? []
}

export async function getProjectInsights(projectId, options = {}) {
  const remote = await fetchFromApi(`/projects/${projectId}/insights`, options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.insights && Array.isArray(remote.insights)) {
    return remote.insights
  }

  return findDefaultProjectById(projectId)?.insights ?? []
}

export async function getDataSources(options = {}) {
  const remote = await fetchFromApi('/data-sources', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.sources && Array.isArray(remote.sources)) {
    return remote.sources
  }

  return observatoryDefaults.dataSources
}

export async function getIntegrationFlow(options = {}) {
  const remote = await fetchFromApi('/integration-flow', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.flow && Array.isArray(remote.flow)) {
    return remote.flow
  }

  return observatoryDefaults.integrationFlow
}

export async function getComplianceHighlights(options = {}) {
  const remote = await fetchFromApi('/compliance', options)

  if (Array.isArray(remote)) {
    return remote
  }

  if (remote?.highlights && Array.isArray(remote.highlights)) {
    return remote.highlights
  }

  return observatoryDefaults.complianceHighlights
}
