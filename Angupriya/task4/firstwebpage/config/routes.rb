	ActionController::Routing::Routes.draw do |map|
  map.resources :comments
 map.resources :counters, :has_many => :comments
 map.root :controller => 'counters'
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
