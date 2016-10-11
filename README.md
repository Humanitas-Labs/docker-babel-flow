# docker-babel-flow
:stars: A Docker image to write ES6 + Flow code that autoreloads and runs anywhere.

### Usage

Development (locally):

```bash
npm install
gulp dev
```

Production:

```bash
docker-compose up
```

### Challenges & Feature Requests

At least in VirtualBox-based installations of Docker, a file update *does not* trigger the `inotify` event.

`gulp-nodemon`, like most inotify-based file watchers, won't work with these installations.

It's [unlikely to be resolved soon](https://www.virtualbox.org/ticket/10660?cversion=0&cnum_hist=1). Some have proposed rsync-based syncronization tools, but it seems like there's nothing that works well out of the box.
