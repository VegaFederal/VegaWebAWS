const REQUEST_TIMEOUT_MS = 10000
const MAX_ATTEMPTS = 3
const RETRY_DELAY_MS = 500

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) {
      throw new Error('Request failed')
    }
    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchTeamMembers(url) {
  let lastError

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetchWithTimeout(url, REQUEST_TIMEOUT_MS)
      return await response.json()
    } catch (error) {
      lastError = error
      if (attempt < MAX_ATTEMPTS) {
        await wait(RETRY_DELAY_MS * attempt)
      }
    }
  }

  throw lastError
}
