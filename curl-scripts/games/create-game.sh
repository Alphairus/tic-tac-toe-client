
curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
