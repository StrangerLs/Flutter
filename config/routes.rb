Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post '/birds/:bird_id/characteristics/:id', to: 'characteristics#add_characteristic'
  get '/birds/type/:name', to: 'birds#show_by_type'
  resources :characteristics, only: :index
  resources :birds
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
