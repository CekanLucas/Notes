#!/usr/bin/env bash

# use the long flag to see file permissions
ls -l

# remove execute file permissions
chmod a-x file_permissions.css 

ls -l file_permissions.css

# add execute file permissions to group
chmod g+x file_permissions.css 

ls -l file_permissions.css

# remove write file permissions to group and others
chmod go-w file_permissions.css 

ls -l file_permissions.css

# reset permissions
chmod a+x file_permissions.css 
chmod g-x file_permissions.css 
chmod go+w file_permissions.css 
ls -l

# modify create time
touch -d "$(date -r *.css ) - 2 hours" *.css 
ls -l file_permissions.css
