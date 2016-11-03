Rails.application.routes.draw do
<<<<<<< HEAD
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
=======
  post '/create' => 'eggs#create'
  get '/show' => 'eggs#show'
  put '/edit' => 'eggs#update'
>>>>>>> fab19e25c26d35a9c9ddb0af53ed2c249dc4f784
end
