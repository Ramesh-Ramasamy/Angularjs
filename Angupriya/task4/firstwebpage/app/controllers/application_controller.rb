# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  attr_reader :current_user
  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password


  def authentication
    if session[:user_id]
      @current_user = User.find session[:user_id]
      return true
    else
      redirect_to(:controller => 'users',:action => 'login')
      return false
    end
  end

  def save_login_state
    
    if session[:user_id]
      @current_user = User.find session[:user_id]
      flash[:notice]='u r already logged in  '+@current_user.name 
      redirect_to(:controller => 'users',:action => 'home')
        return false
    else
      return true
    end
  end

  def logout
    session[:user_id]=nil 
    flash[:notice]='successfully logged out'
    redirect_to(:controller => 'users',:action => 'home')
    end
end
