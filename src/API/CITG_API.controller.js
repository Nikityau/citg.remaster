import axios from "axios";
import CITG_APIService from "src/API/CITG_API.service";

class CITG_APIController {
    async getProjects() {
        const { data } = await CITG_APIService.getProjects()
        return data.projects;
    }
    async getProjectById(id) {
        const { data } = await CITG_APIService.getProjectById(id)
        return data.project;
    }
    async getTeam() {
        const { data } = await CITG_APIService.getTeam();
        return data.teams;
    }
    async getTeamMemberById(id) {
        const { data } = await CITG_APIService.getTeamMemberById(id);
        return data.team
    }
    async getMemberCertificates() {
        const certificates = []

        const { data } = await CITG_APIService.getTeam()

        data.teams?.map(member => {
            certificates.push(...member.certificates)
        })

        return certificates
    }
}

export default new CITG_APIController()