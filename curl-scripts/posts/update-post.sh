#!/bin/bash

curl "https://rate-my-hike-api.herokuapp.com/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "post": {
        "post_id": "'"${POSTID}"'",
        "title": "'" "'",
        "body": "'" "'",
        "location": "'" "'"

      }
    }'
echo
