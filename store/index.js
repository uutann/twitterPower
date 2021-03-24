import firebase from '~/plugins/firebase'

export const state = () => ({
    user: {},
})

export const mutations = {
    setUser(state, Info) {
        state.user = {...Info.user };
        state.user.Tid = Info.id
    },
}

export const actions = {
    login({ commit, $config }) {
        console.log('login action')
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */

                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                //console.log("suc" + JSON.stringify(result.user))
                //console.log(result)
                console.log(result.additionalUserInfo)
                commit("setUser", { "user": result.additionalUserInfo.profile, "id": result.additionalUserInfo.username })
                    // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(error)
            });
    },
    logout() {
        firebase.auth().signOut().then(() => {
            console.log("logout")
        }).catch((error) => {
            // An error happened.
        });
    },

}

export const getters = {}