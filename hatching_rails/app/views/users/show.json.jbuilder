json.user do
  json.id    @user.id
  json.email @user.email
  # json.token @user.token
end

json.success "OK"

# user: {
#   id:
#   email:
#   token:
# }
