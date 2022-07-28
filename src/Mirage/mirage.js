import {createServer, Model} from 'miragejs'

import {projects} from 'src/Mirage/project/projects'
import { team } from './team/team'

const mirage = createServer({
    models: {
        project: Model,
        team: Model,
    },

    routes() {
        this.namespace = 'api'

        this.get('/projects', (schema, request) => {
            return schema.projects.all()
        })
        this.get('/projects/:id', (schema, request) => {
            const id = request.params.id;

            return schema.projects.find(id)
        })
        this.get('/teams', (schema, request) => {
            return schema.teams.all()
        })
        this.get('/teams/:id', (schema, request) => {
            const id = request.params.id;

            return schema.teams.find(id)
        })
    },

    seeds(server) {
        projects.map(project => {
            server.create('project', project)
        })

        team.map(member => {
            server.create('team', member)
        })
    }
})

export default mirage