Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/issues', to: 'issues#create'
  get '/issues/:id', to: 'issues#show'
  put '/issues/:id', to: 'issues#update'
  delete '/issues/:id', to: 'issues#delete'
end
