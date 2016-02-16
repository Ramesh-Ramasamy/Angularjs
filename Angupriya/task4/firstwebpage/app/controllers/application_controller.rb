# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  attr_reader :current_user
  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password


  def authentication
    if Rails.cache.read('user_id')
      @current_user = User.find Rails.cache.read('user_id')
      return true
    else
      redirect_to(:controller => 'users',:action => 'login')
      return false
    end
  end

  def logout
    Rails.cache.write('user_id',nil)
    redirect_to root_path
  end
end
