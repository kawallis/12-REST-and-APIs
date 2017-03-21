'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE KINDA TODO: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax('https://api.github.com/users/kawallis/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      },
    }).then((res) => {
      var filteredRepos = res.filter(r => r.fork === false);
      console.log(filteredRepos);
    }).catch(err =>  console.error)
    callback();
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
