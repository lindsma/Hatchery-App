Rails.application.routes.draw do
  resources :users

  get '/user'  => 'users#new'

  post '/user'  => 'users#create'

  post '/create' => 'eggs#create'

  get '/show' => 'eggs#show'

  put '/edit' => 'eggs#update'
end
