require('gh-pages').publish('build', {
  branch: 'master',
  repo: 'git@github.com:kane-thornwyrd/kane-thornwyrd.github.com.git',
  dotfiles: true,
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DONE !');
  }
});
