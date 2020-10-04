const fs = require('fs')
const data = require('../data/db')
const similarityMatrix = require('./similarityInferenceMatrix')
const variablesWeight = require('./variablesWeight')

/**
 * Calculates the torelance margin with 30% for more or less
 * @param { Number } value - percentage
 * @returns { Array }
 */
function getPriceToleranceRange (value) {
  const percentageTolerance = 0.3
  return [
    value - (value * percentageTolerance),
    value + (value * percentageTolerance)
  ]
}

/**
 * Calculates the torelance margin with 1 for more or less
 * @param { Number } value - rating value
 * @returns { Array }
 */
function getRatingToleranceRange (value) {
  const percentageTolerance = 1
  return [
    value === 0 ? value : value - percentageTolerance,
    value === 5 ? value : value + percentageTolerance
  ]
}

/**
 * Process each property from dataDase to apply any necessary
 * heuristic
 * @param { Object[] } data - dataBase results
 * @returns { Array }
 */
function parseData (data) {
  return data.map(currentCase => {
    currentCase.price.toleranceRange = getPriceToleranceRange(currentCase.price.value)
    currentCase.rating.toleranceRange = getRatingToleranceRange(currentCase.rating.value)
    return currentCase
  })
}

/**
 * Builds similarity according to similarity matrix and
 * weights for each variables
 * @param { Array } parsedData - parsed data from database 
 * @param { Objec } preferences - user preferences
 * @returns { Object[] }
 */
function buildSimilaritires (parsedData, preferences) {
  return parsedData.map(function (currentCase) {
    return {
      solution: currentCase.name,
      cuisineType: (() => {
        const userCuisineIndex = similarityMatrix.cuisines.indexOf(this.cuisineType)
        const currentCaseCuisineIndex = similarityMatrix.cuisines.indexOf(currentCase.cuisineType)
        const similarityValue = similarityMatrix.localSimilarity[currentCaseCuisineIndex][userCuisineIndex]
        return variablesWeight['cuisineType'] * similarityValue
      })(),
      price: (() => {
        const userPrice = this.price
        const minPrice = currentCase.price.toleranceRange[0]
        const maxPrice = currentCase.price.toleranceRange[1]
        const priceMultiplier = Number((userPrice > minPrice && userPrice < maxPrice))
        return variablesWeight['price'] * priceMultiplier
      })(),
      glutenFree: (() => variablesWeight['glutenFree'] * Number(this.glutenFree === currentCase.glutenFree))(),
      sugarFree: (() => variablesWeight['sugarFree'] * Number(this.sugarFree === currentCase.sugarFree))(),
      lactoseFree: (() => variablesWeight['lactoseFree'] * Number(this.lactoseFree === currentCase.lactoseFree))(),
      soyFree: (() => variablesWeight['soyFree'] * Number(this.soyFree === currentCase.soyFree))(),
      thematic: (() => variablesWeight['thematic'] * Number(this.thematic === currentCase.thematic))(),
      rating: (() => {
        const userRating = this.price
        const minRating = currentCase.price.toleranceRange[0]
        const maxRating = currentCase.price.toleranceRange[1]
        const ratingMultiplier = Number((userRating > minRating && userRating < maxRating))
        return variablesWeight['rating'] * ratingMultiplier
      })()
    }
  }, preferences)
}

/**
 * Initial step to apply the algorithm that calculates
 * local similarity based on previous cases
 * @param { Object } preferences - user preferences
 */
function caseBaseReasoning (preferences) {
  const parsedData = parseData(data)
  const similarities = buildSimilaritires(parsedData, preferences)
  const userFinalSimilaritiesSum = similarities
    .map(similarity => {
      return Object.values(similarity).reduce((sum, value) => {
        if (typeof value === 'number') {
          sum += value
        }
        return sum
      }, 0)
    })
    .map((sum, index) => {
      return {
        position: index,
        value: sum
      }
    })
    .sort((a, b) => b.value - a.value)
    .map(solution => parsedData[solution.position])
    return userFinalSimilaritiesSum
}

module.exports = {
  getDataBase: data,
  getSimilars: caseBaseReasoning
}