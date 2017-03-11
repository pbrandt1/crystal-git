/**
 * Module api
 * require this to get access to the crystal git commands in a node.js app
 */

var execSync = require('child_process').execSync

/**
 * Start using crystal git in an existing or new repo
 */
function init (directory) {
  return new Promise(function (resolve, reject) {
    console.log('init not implemented')
  })
}

/**
 * Main crystal git functionality to unfuck your life
 * - Switches to a branch [my git name]/[feature name]/in-progress
 * - Commits changes locally every five minutes so that you can time-travel
 * - Pulls latest code every five minutes and rebases your work on top of it
 */
function watch (directory) {
  var cron = require('espruino-cron')
  var moment = require('moment')

  // get the directory to watch
  directory = directory || process.cwd()

  // helper function to run git commands
  function git(cmd) {
    return execSync('git ' + cmd, {
      cwd: directory
    }).toString().trim()
  }

  // Make sure you're on the in-progress branch
  var branch = git('rev-parse --abbrev-ref HEAD')

  if (branch !== getInProgressBranch()) {
    console.log('switching to branch ' + getInProgressBranch())
    git('checkout -b ' + getInProgressBranch())
  }

  // Run a thing every five minutes to commit code and pull for changes
  return cron('0/10 * * * * *', function() {
    // Check for changes
    var status = git('status --porcelain')

    if (status.length > 0) {
      // Commit changes locally
      const time = moment().format('HH:mm:ss')
      const message = 'State at ' + time
      console.log(message)
      git('add -A')
      git(`commit -m '${message}'`)
    }

    // pull latest
    


  });
}

/**
 * Commits everything
 *  - First commits to the in-progress branch
 *  - Then merges the commits from in-progress to feature
 *  - Then merges from feature to mainline
 *  - Then pushes to origin/mainline
 */
function commit (message) {

}

/**
 * Start working on a feature/bug/issue/project or whatever
 * @param {String} name the name of the feature, issue, or project you want to work on
 */
function cg_switch (name) {
  return new Promise(function(resolve, reject) {
    feature = name;
    resolve(feature);
  })
}

function getMyPrefix() {
  return 'peter'
}

var feature = 'crystal'
function getCurrentFeature() {
  return feature
}

function getInProgressBranch() {
  return getMyPrefix() + '/' + getCurrentFeature() + '/in-progress'
}

module.exports = {
  init: init,
  watch: watch,
  switch: cg_switch
}


