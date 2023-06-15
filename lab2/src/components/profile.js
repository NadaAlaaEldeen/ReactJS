function Profile (){
    const Styles= {
        welcome:{
        textAlign: 'center',
        background: '#088395',
        width: '50%',
        margin: '2% auto', 
        padding: '2%',
        borderRadius: '10px',
        color: 'white',
        }
    }
    return(
        <div>
            <h1 style={Styles.welcome}>Welcome Back</h1>
        </div>
    )
}
    export default Profile;