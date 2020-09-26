document.addEventListener("DOMContentLoaded", event => {
    const app = firebase
    console.log(app)

    const db = firebase.firestore()
    // Creates a realtime reference
    const myPosts = db.collection('posts').doc('firstpost')


    myPosts.get()
    .then(doc => {
        const data = doc.data()
        console.log('Firestore Data')
        console.log(data)
    })

    //To execute each time the data is changed
    myPosts.onSnapshot(
        doc => {
            const data = doc.data()
            document.body.append(data.title + ' ')
            document.body.append(data.createdAt+ ' ')
        }
    )
    
})

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    
    firebase.auth().signInWithPopup(provider)
    .then(res => {
        const user = res.user
        document.write(`Hello ${user.displayName}`)
        console.log(user)
    })
    .catch(console.log)
}

function updatePost(e){
    const db = firebase.firestore()
    const myPost = db.collection('posts').doc('firstpost')
    myPost.update({title: e.target.value})
}