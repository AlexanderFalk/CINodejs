-#!/bin/sh      
ssh builder@138.197.178.42 <<EOF        
 cd /your-project-path  
 git pull       
 npm install --production       
 pm2 restart all
 exit       
EOF
