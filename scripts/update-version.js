const fs = require('fs');
const path = require('path')
const axios = require('axios')
const { execSync } = require("child_process")

const SEMANTIC_VERSIONING_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/

async function getLastTag() {
    const {data} = await axios.default.get("https://api.github.com/repos/gabriel-brotas/is-odd/tags")
    return String(data[0].name).substring(1)
}

async function updatePackageVersion() {
    const lastTag = await getLastTag()

    const packageJsonPath = path.join(__dirname, "../package.json")
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

    if(!SEMANTIC_VERSIONING_REGEX.test(lastTag)) {
        throw new Error("Tag doesn't follow Semantic versioning pattern")
    }

    if(packageJson.version == lastTag) return;

    packageJson.version = lastTag

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    
    console.log("Publishing...")

    execSync('npm publish', {
        stdio: 'inherit'
    })
}

updatePackageVersion()