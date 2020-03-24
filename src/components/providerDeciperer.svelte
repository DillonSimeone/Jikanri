<script context="module">
  import { auth } from './../auth'
  // Result arg should be from signin in SetUp.svelte!
  export function providerDeciperer(result) {
    let authObject = {
      username: '',
      profilePicture: '',
      accessToken: '',
      refreshToken: ''
    }
    // console.log("You've imported me!");
    // console.log("Hmm, the provider is..." + result.additionalUserInfo.providerId);
    switch (result.additionalUserInfo.providerId) {
      case "google.com": {
        authObject.username = result.additionalUserInfo.profile.name;
        authObject.profilePicture = result.additionalUserInfo.profile.picture;
        authObject.accessToken = result.credential.accessToken;
        authObject.refreshToken = result.user.refreshToken;
        break;
      }
      case "github.com": {
        authObject.username = result.additionalUserInfo.username;
        authObject.profilePicture =
          result.additionalUserInfo.profile.avatar_url;
        authObject.accessToken = result.credential.accessToken;
        authObject.refreshToken = result.user.refreshToken;
        break;
      }
      default: {
        // console.log("What is this crap are you feeding me!?")
        break;
      }
    }
    auth.update(auth => (auth = authObject)); // I don't like this. See commented out code block below.

    // This below would have been the perfect way for this to be coded! But... For some reason, despite the last console.log(auth) logging an object to the console with all of the fields filled in, if you try to read the $auth object from other pages, you get a undefined object!
    /* 
    auth.update(auth => {
      console.log(auth);
      switch (result.additionalUserInfo.providerId) {
        case "google.com": {
          auth.username = result.additionalUserInfo.profile.name;
          auth.profilePicture = result.additionalUserInfo.profile.picture;
          auth.accessToken = result.credential.accessToken;
          auth.refreshToken = result.user.refreshToken;
          break;
        }
        case "github.com": {
          auth.username = result.additionalUserInfo.username;
          auth.profilePicture = result.additionalUserInfo.profile.avatar_url;
          auth.accessToken = result.credential.accessToken;
          auth.refreshToken = result.user.refreshToken;
          break;
        }
        default: {
          // console.log("What is this crap are you feeding me!?")
          break;
        }
      }
      //console.log(auth)
      // auth = auth // As expected, this didn't work, lol. Shame.
    })
     */
  }
</script>
