<script context="module">
  // Result arg should be from signin in SetUp.svelte!
  export function providerDeciperer(result) {
    let userObject = {}
    // console.log("You've imported me!");
    // console.log("Hmm, the provider is..." + result.additionalUserInfo.providerId);
    // console.log(result)
    // console.log(result.additionalUserInfo.profile)
    switch (result.additionalUserInfo.providerId) {
      case "google.com": {
        // console.log("Profile name from google profile being saved... " + result.additionalUserInfo.profile.name) // Returns a proper name!
        userObject.username = result.additionalUserInfo.profile.name // Becomes undefined!? Dragon! DRAGONS!
        // console.log("Profile name saved in userObject... " + userObject.username) // Returns a proper name... What's going on here? Why is it becoming undefined outside of the switch?

        // console.log(result.additionalUserInfo.profile.picture) // Same as above
        userObject.profilePicture = result.additionalUserInfo.profile.picture // By gods, there's MORE DRAGONS!

        userObject.accessToken = result.credential.accessToken // Do we need the idToken too? (Look at result.credential, it's there under accesstoken.)
        userObject.refreshToken = result.user.refreshToken // I think the access token up above doesn't have an expire on it... Is this token for firebase auth, not google?
      }
      case "github.com": {
        userObject.username = result.additionalUserInfo.username
        userObject.profilePicture = result.additionalUserInfo.profile.avatar_url // Big brain time!
        userObject.accessToken = result.credential.accessToken
        userObject.refreshToken = result.user.refreshToken
      }
    }
    // console.log(userObject)
    // Save the userObject into localstorage!
  }
</script>
