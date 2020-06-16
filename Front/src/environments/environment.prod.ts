export const environment = {
  production: true,
  baseUrl:`${window.location.protocol}//${window.location.hostname}/api`,

  auth: {
    clientID: '3SidlGky3r1V0jYjtp0bSgUlW2zbcKTH',
    domain: 'villalongapp.auth0.com', // e.g., https://you.auth0.com/
    audience: 'http://pilates-env.eba-htwrapqj.eu-west-1.elasticbeanstalk.com/api', // e.g., http://localhost:3001
    redirect: 'http://pilates-env.eba-htwrapqj.eu-west-1.elasticbeanstalk.com/callback',
    scope: 'openid profile email'
  }

};
