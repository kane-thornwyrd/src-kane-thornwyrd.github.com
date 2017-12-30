require('gh-pages').publish('build', {
  branch: 'master',
  repo: 'https://github.com/kane-thornwyrd/kane-thornwyrd.github.com.git',
}, (err) => {
  console.log(err);
  console.log('DONE');
});
