
#Test koa rest project

[yo generator koa rest](https://github.com/PatrickWolleb/generator-koa-rest)

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

