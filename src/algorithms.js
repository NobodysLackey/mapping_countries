export const levenshteinDistance = (a, b, exactMatch = false) => {
  if (exactMatch && a.toLowerCase() === b.toLowerCase()) {
    return 0
  }

  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const matrix = []

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }

  return matrix[b.length][a.length]
}

export const searchCountry = (query, countries) => {

  const exactMatchResults = []
  const otherResults = []

  for (const country of countries) {
    const distance = levenshteinDistance(
      query.toLowerCase().trim(),
      country.name.toLowerCase()
    )
    if (distance === 0) {
      exactMatchResults.push(country)
    } else {
      otherResults.push(country)
    }
  }

  return exactMatchResults.length > 0 ? exactMatchResults : otherResults
}

export const getAllLanguages = (countries) => {
  const languages = []

  countries.forEach((country) => {
    const countryLanguages = country.language
      .split(',')
      .map((lang) => lang.trim())
    countryLanguages.forEach((lang) => {
      if (!languages.includes(lang)) {
        languages.push(lang)
      }
    })
  })

  languages.sort((a, b) => a.localeCompare(b))

  return languages
}

export const getAllContinents = (countries) => {
  const continents = []

  countries.forEach((country) => {
    const countryContinents = country.continent
      .split(',')
      .map((cont) => cont.trim())
    countryContinents.forEach((cont) => {
      if (!continents.includes(cont)) {
        continents.push(cont)
      }
    })
  })

  continents.sort((a, b) => a.localeCompare(b))

  return continents
}

export const fisherYates = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
  }
  return newArray
}
