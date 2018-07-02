
curl "https://rate-my-hike-api.herokuapp.com/posts" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "post": {
      "title": " Hulburt Hill ",
      "body": " Hiked the 1.3 miles  Hike was easy.",
      "location": "Sheffield"
    }
  }'

  echo
