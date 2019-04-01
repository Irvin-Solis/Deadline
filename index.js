const reminder = require('./reminders')
const createScheduler = require('probot-scheduler')

module.export = app => {
  createScheduler(app, {interval: 1 * 60 * 1000})
  app.on('pullrequest.labeled', reminder.set)
  app.on('schedule.repository', reminder.check)
}
