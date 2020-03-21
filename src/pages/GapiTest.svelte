<script>
  import firebase from '@firebase/app'
  import { firebaseConfig as config } from '../firebase'
  import { navigate } from 'svelte-routing'

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  gapi.load('client:auth2', _ => {
  gapi.client.init({
       apiKey: config.apiKey,
       clientId: config.clientID,
       discoveryDocs: config.discoveryDocs,
       scope: config.scopes.join(' '),
  }).then(() => {
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        getEvents(user)
      } else {
       console.error('error while obtaining Oauth2 status!')
      }
  })
})
  } else {
    navigate('/', {replace: true})
  }
});
function getEvents(user) {
  console.log(user);
  firebase.auth().currentUser.getIdToken()
  .then(function(token) {
    return gapi.client.calendar.events.list({
     calendarId: "primary",
     timeMin: new Date().toISOString(),
     showDeleted: false,
     singleEvents: true,
     maxResults: 10,
     orderBy: "startTime"
    })  
   })
  .then(function(response) {
    console.table(response.body) 
  });
}

</script>

