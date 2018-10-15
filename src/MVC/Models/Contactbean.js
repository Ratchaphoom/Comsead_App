const Contact = (dispath) => {
    return {
        setId: (id) => {
            dispath({
                type: "SET_CONTACT_ID",
                payload: id
            })
        },
        setContactname: (name) => {
            dispath({
                type: "SET_CONTACTNAME",
                payload: name
            })
        },
        setContactemail: (email) => {
            dispath({
                type: "SET_CONTACT_EMAIL",
                payload: email
            })
        },
        setContactphone: (phone) => {
            dispath({
                type: "SET_CONTACT_PHONE",
                payload: phone
            })
        },
        setContactmessage: (message) => {
            dispath({
                type: "SET_CONTACT_MESSAGE",
                payload: message
            })
        },
    }
}
export default Contact