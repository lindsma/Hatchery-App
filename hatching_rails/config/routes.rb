Rails.application.routes.draw do
  post '/create' => 'eggs#create'
  get '/show' => 'eggs#show'
  put '/edit' => 'eggs#update'
end
