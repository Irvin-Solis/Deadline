const methods = require('./methods')
const metadata = require('probot-metadata')
const moment = require('moment');
const chrono = require('chrono-node');

const refrenceDate = moment().format('MM/DD/YYYY h:mm a')

const config = await context.config('setup.yml')

const LABEL = `reminder`
module.export= {
  async set (context) {
    const tagg =  await findLabel(config) //not sure it will set label: label,
    const { labels } = context.payload.issue
    const { name } = labels
    var answer = []//required array for isTheirAnEquality and findTime
    if(isTheirAnEquality(tagg, name)){ //not sure it will compare the objects of both these arrays
      labels.push(LABEL)
      await context.github.issues.edit(context.issue({labels}))

      const DATE = findTime(config)
      const time = new Date(chrono.parseDate(DATE, refrenceDate))//creates new Date using "time" from config, and formats it to a relevant date.
      await metadata(context).set(time)
      await context.github.issues.createComment(context.issue({
        body:`deadline set for **${moment(time).format('MM/DD/YYYY h:mm a')}**`
      }))
    }
  },

  async check (context) {
    const {owner, repo} = context.repo()
    const q = `label:"${LABEL}" repo:${owner}/${repo}`
    const resp = await context.github.search.issues({q})

    await Promise.all(resp.data.items.map(async issue => {
      issue = context.repo(issue)
      const { owner, repo, number } = issues
      const time = await metadata(context, issue).get()
      //convert DATE array to variable for easy comparisian

      if(moment(time).format('MM/DD/YYYY h:mm a') < refrenceDate){
        const labels = issue.labels
        const taggedLabel = labels.find(({ name }) => name === LABEL) //not sure it will compare elements of both these arrays
        const pos = labels.indexOf(taggedLabel)
        labels.splice(pos, 1)

        var answer = []
        const { name } = labels
        const tagg =  await findLabel(config)
        if(isTheirAnEquality(tagg, name)){
          const comment = findComment(config)
        }
        else{
          const comment = `**Deadline passed!**`
        }

        await context.github.issue.edit({owner, repo, number, labels, state: 'open'})
        await context.github.issue.createComment({
          owner,
          repo,
          number,
          body: comment
        })
      }
    }
  }
}
