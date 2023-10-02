---
tags:
  - debug
---
## The steps to upload to Github repo 
git add . 
git commit -m --write message
git fetch (gets information from remote but doesn't merge into the current branch)
git pull (fetch & merge)
git push

## Other important commands
git -remote set-origin https://github.com/RikaGoldberg/quartzv4/ v4
git status
git 
## Seemingly random errors
**E.g.** RPC failed; HTTP 408 curl 92 HTTP/2 stream 7 was not closed cleanly: CANCEL (err 8)
**Solution** git config --global http.version HTTP/1.1


