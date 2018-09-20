const mapStateToProps = (state) => {
    return {
        member: state.member,
        login: state.login,
        reservation: state.reservation,
        room: state.room,
        activity: state.activity,
        event: state.event,
    }
}

export default mapStateToProps