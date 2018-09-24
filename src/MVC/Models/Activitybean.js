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
                type: "SET_ACTIVITY_PRICE",
                payload: price
            })
        }, setDescription: (description) =>{
            dispath({
                type: "SET_ACTIVITY_DESCRIPTION",
                payload: description
            })
        },setCategolry: (categolry) =>{
            dispath({
                type: "SET_ACTIVITY_CATEGOLRY",
                payload: categolry
            })
        },setImages: (images) =>{
            dispath({
                type: "SET_ACTIVITY_IMAGES",
                payload: images
            })
        }
    }
}
export default Activity