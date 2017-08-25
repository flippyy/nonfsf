# nonfsf
Non Free Software Foundation

## Getting apache up for previewing:

1. Install apache `sudo pacman -S apache`

2. Symlink `nonfsf.org` to your cloned directory `ln -s $HOME/<cloned repo dir> /srv/http/nonfsf.org`

You should be able to access the webpage by going to `localhost:80/nonfsf.org`

## Using node instead of apache

```
npm install
node server.js
```

The page should be then visible by accessing `localhost:8080`
