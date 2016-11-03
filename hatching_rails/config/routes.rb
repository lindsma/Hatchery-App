Rails.application.routes.draw do
<<<<<<< HEAD

  get '/user'  => 'users#new'
  post '/user'  => 'users#create'

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
=======
  post '/create' => 'Eggs#create'
  get '/show' => 'Eggs#show'
  put '/edit' => 'Eggs#update'
>>>>>>> 5a6acb4b12f5285b41af45c609889d0de1c77f43
end
