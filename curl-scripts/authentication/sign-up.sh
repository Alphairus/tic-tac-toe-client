API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/sign-in"

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
