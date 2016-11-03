Rails.application.routes.draw do
  post '/create' => 'Eggs#create'
  get '/show' => 'Eggs#show'
  put '/edit' => 'Eggs#update'
end
