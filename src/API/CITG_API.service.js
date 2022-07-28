import axios from "axios";

class CITG_APIService {
    async getProjects() {
        const response = await axios.get('/api/projects')
        return response;
    }
    async getProjectById(id) {
        const response = await axios.get(`/api/projects/${id}`)
        return response
    }
    async getTeam() {
        const response = await axios.get('/api/teams')
        return response
    }
    async getTeamMemberById(id) {
        const response = await axios.get(`/api/teams/${id}`)
        return response
    }
}

export default new CITG_APIService()
