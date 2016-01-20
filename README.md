#Test koa rest project

[yo generator koa rest](https://github.com/PatrickWolleb/generator-koa-rest)

##run the project

### run production environment
``` bash
  $ npm run start
```
### run devlopment environment
``` bash
  $ npm run dev
```

## forever in the backgroud

### run production environment in the background
``` bash
  $ NODE_ENV=production forever start ./ -o output.log 
```
### run devlopment environment in the background
``` bash
  $ NODE_ENV=development forever start ./ -o output.log 
```
### orther forever operation
``` bash
  $ forever list //List all running forever scripts
  $ forever stop 0 // stop 
```


# mulit ssh key config
[git base generat  mulit ssh key config](http://riny.net/2014/git-ssh-key/)

## generator ssh key
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "email"

## config
touch ~/.ssh/config

Host mygithub github.com
	Hostname github.com
	IdentityFile ~/.ssh/id_rsa.github
	User jes1@sohu.com

## upload pub key
clip < ~/.ssh/id_rsa.pub    
copy and upload to github

## Test the connection
ssh -T git@github.com
ssh -vT git@github.com


