/**
 * qua spiega come fare un bash per il check. è interessante
 * https://www.develer.com/git-come-scrivere-commit-e-perche/
 *
 */

const fs = require('fs')
const execSync = require('child_process').execSync

const args = process.argv.slice(2)

const msg = args[0]

fs.readFile(msg, 'utf8', (err, text) => {
  if (err) {
    console.error(err)
    return
  }
  const patch = text.match(/^(Fix|Patch)(?:\(.*\))?: /gm)
  const minor = text.match(/^(Add|Created|Update)(?:\(.*\))?: /gm)
  const major = text.match(/^(Release|Rework)(?:\(.*\))?: /gm)

  if (patch) {
    try {
      execSync('npm version patch --no-git-tag-version', { encoding: 'utf8' })
      execSync('git add package.json package-lock.json', { encoding: 'utf8' })
      execSync('git commit -m "Automated bump version [skip CI]"', { encoding: 'utf8' })
    } catch (err) {
      console.error(err)
    }
    return
  }
  if (minor) {
    console.log('faccio una minor')
    return
  }
  if (major) {
    console.log('faccio una major')
  }

  // console.log('nessuna azione necessaria')
})

/*
const gitCommand = 'git rev-parse HEAD'

const getGitCommitHash = () => execSync(gitCommand).toString().trim()

getGitCommitHash() */
