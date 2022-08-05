export const HOME_LINK = '/home'
export const PROJECTS_LINK = '/projects'
export const TEAM_LINK = '/team'

export const CURRENT_PROJECT_ID_TEMPLATE = ':projectId'
export const CURRENT_PROJECT_LINK = `${PROJECTS_LINK}/${CURRENT_PROJECT_ID_TEMPLATE}`

export const TEAM_MEMBER_ID_TEMPLATE = ':memberId'
export const TEAM_MEMBER_LINK = `${TEAM_LINK}/${TEAM_MEMBER_ID_TEMPLATE}`

export const TEAM_MEMBER_WORK_ID_TEMPLATE = ':workId'
export const TEAM_MEMBER_WORK_LINK = `${TEAM_MEMBER_LINK}/member-works/${TEAM_MEMBER_WORK_ID_TEMPLATE}`;