ActionController::Routing::Routes.draw do |map|

  # Api::Routes.draw(map)
  #   map.resources :comments
  # end

  # map.resources :api do |api|
  #  api.resources :posts
  #  get "/" => "posts#index"
  # end
  # map.resources :posts
  map.resources  :apiposts
  map.resources  :homes
  map.resources :details
  map.resources :link_without_titles
  map.resources :link_with_titles
  map.resources :users , :collection => {:login => :get, :login_attempt => :get,:home => :get}
  map.resources :comments , :collection => {:create_comments => :post,:dashboard => :get}
  map.resources :counters, :has_many => :comments ,:collection => {:dashboard => :get}
  map.resources :comments, :has_one  => :user
  map.root      :controller => 'homes'
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
  map.connect ':controller/:action'
   ActionController::Routing::Routes.draw do |map|
   Jammit::Routes.draw(map)
   end
 end
# end

