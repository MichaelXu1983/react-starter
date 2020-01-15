import routes from './routes.js'
import syncComponents from './SyncComponents.js'
import asyncComponents from './AsyncComponents.js'

const components = Object.assign(syncComponents, asyncComponents)
const routers = JSON.parse(JSON.stringify(routes))

const attachComp = arr => {
  arr.forEach(item => {
    if (typeof item.component === 'string' && components[item.component]) {
      item.component =
        components[item.component].default || components[item.component]
    }
    if (typeof item.layout === 'string' && components[item.layout]) {
      item.layout = components[item.layout].default || components[item.layout]
    }
  })
}
attachComp(routers)

export default routers
