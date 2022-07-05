const fs = require('fs');
const path = require('path')
const axios = require('axios')


async function getLastTag() {
    const {data} = await axios.default.get("https://api.github.com/repos/gabriel-brotas/is-odd/tags")
    return String(data[0].name).substring(1)
}

async function updatePackageVersion() {
    const lastTag = await getLastTag()

    const packageJsonPath = path.join(__dirname, "../package.json")
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    packageJson.version = lastTag
    console.log(lastTag)

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

updatePackageVersion()