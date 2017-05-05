Rails.application.routes.draw do


  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
    resources :ditties
  end

  namespace :api do
    namespace :api do
      resources :users
    end
  end

  namespace :api do
    namespace :api do
      resources :ditties
    end
  end

  root 'home#index'
end
