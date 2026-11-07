import { useMediaQuery } from "@vueuse/core";

export function isMobile(){
    return useMediaQuery('(max-width: 768px)')
}