Rails.application.routes.draw do
  get 'adjectives/index'
  get 'nouns/index'
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope '/api/v1' do
    resources :concepts, :nouns, :adjectives
  end
  root to: "home#index"
  get '*path', to: 'home#index'
end
