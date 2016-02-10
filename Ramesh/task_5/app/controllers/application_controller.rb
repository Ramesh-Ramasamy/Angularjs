# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  include ApplicationHelper
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  helper_method :current_user

  def current_user
      @current_user ||=User.find(session[:user_id]) if session[:user_id]
  end

  def check_user
    if (!current_user)
      flash[:notice] = "You Must Login !.."
      redirect_to '/login'
    end
  end
end
