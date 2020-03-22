<script>
  import firebase from "@firebase/app";
  //import { firebaseConfig as config } from '../firebase'
  import { navigate } from "svelte-routing";

  firebase.auth().onAuthStateChanged(function(user) {
    if (user.providerData[0].providerId === "github.com") {
      console.log("Yes, this is github!");
      let githubToken = user.credential.accessToken; // Throw this token at Github's APIs to get it to play nice with you!
      // start up the github api! Here! Code code codey code code
      // https://github.com/github-tools/github This seems like a really nice wrapper! It can work with 0auth tokens. 
      // https://octokit.github.io/rest.js/v17 I think this is the offical javascript Github API...? Not sure. No one's talking about this.
    } else {
      navigate("/", { replace: true }); // I think this will trigger for GapiTest.svelte... Think about this later. We will need to merge GithibTest and GapiTest.
    }
  });
</script>
