Rails.application.routes.draw do
  # Basic Devise Login (Make sure this comes first)
  devise_for :users

  # Devise Token Auth Login
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

  
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'

  root 'welcome#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
