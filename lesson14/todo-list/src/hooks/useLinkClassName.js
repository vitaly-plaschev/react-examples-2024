export function useLinkClassName(module){
    const link = `${module.link}`; // link
    const active = `${module.link} ${module.active}`; // link active
    const pending = `${module.link} ${module.pending}`; // link pending

    return ({isActive, isPending}) => {
        return isActive ? active : isPending ? pending : link;
    }
}