const Activity = (dispath) => {
    return {
        setId: (id) => {
            dispath({
                type: "SET_ACTIVITY_ID",
                payload: id
            })
        }, setActivityName: (activityname) =>{
            dispath({
                type: "SET_ACTIVITYNAME",
                payload: activityname
            })
        }, setPrice: (price) =>{
            dispath({
                type: "SET_PRICE",
                payload: price
            })
        }, setDescription: (description) =>{
            dispath({
                type: "SET_DESCRIPTION",
                payload: description
            })
        }
    }
}
export default Activity