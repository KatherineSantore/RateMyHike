#!/bin/bash
# call using sh scripts/doctor/delete-post.sh  ID=3

curl "https://rate-my-hike-api.herokuapp.com/posts/${ID}" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE

echo
