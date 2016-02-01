ActionController::Routing::Routes.draw do |map|
  map.resources :link_without_titles
  map.resources :link_with_titles
  map.resources :users , :collection => {:login => :get, :login_attempt => :get,:home => :get}
  map.resources :comments
  map.resources :counters, :has_many => :comments
  map.root      :controller => 'counters' 
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end

