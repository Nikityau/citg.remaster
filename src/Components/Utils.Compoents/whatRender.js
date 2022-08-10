import {isDesktop, isMobileOnly, isTablet} from "react-device-detect";

export const whatRender = (desktop, tablet, mobile) => {
    if(isDesktop) {
        return desktop
    }
    if(isTablet) {
        return tablet
    }
    if(isMobileOnly) {
        return mobile
    }
}