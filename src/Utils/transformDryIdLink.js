import {
    CURRENT_PROJECT_ID_TEMPLATE,
    CURRENT_PROJECT_LINK, TEAM_MEMBER_ID_TEMPLATE,
    TEAM_MEMBER_LINK, TEAM_MEMBER_WORK_ID_TEMPLATE, TEAM_MEMBER_WORK_LINK
} from "components/AppRouter/AppRouter.links";

export const transformDryIdLink = (CONST_LINK, id) => {

    switch (CONST_LINK) {
        case CURRENT_PROJECT_LINK:
            return _dryIdLinkTransformer(CONST_LINK, CURRENT_PROJECT_ID_TEMPLATE, id)
        case TEAM_MEMBER_LINK:
            return _dryIdLinkTransformer(CONST_LINK, TEAM_MEMBER_ID_TEMPLATE, id)
        case TEAM_MEMBER_WORK_LINK:
            if(!Array.isArray(id)) return _dryIdLinkTransformer(CONST_LINK, TEAM_MEMBER_ID_TEMPLATE, id)

            const [firstId, secondId] = id;

            return _dryIdLinkTransformer(_dryIdLinkTransformer(CONST_LINK, TEAM_MEMBER_ID_TEMPLATE, firstId), TEAM_MEMBER_WORK_ID_TEMPLATE, secondId)
        default:
            return new Error('Unknown DRY_ID_LINK')
    }
}

const _dryIdLinkTransformer = (CONST_LINK ,replaceTemplate, id) => {
    return CONST_LINK.replace(replaceTemplate, id)
}