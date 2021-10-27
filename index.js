const adjectives = require("./adjectives.json")
const nouns = require("./nouns.json")

module.exports = () => {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    const randomNumber = Math.floor(Math.random() * 1000)

    return `${randomNumber}-${adjective}-${noun}s`
}