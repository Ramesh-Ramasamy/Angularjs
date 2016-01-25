class SessionsController < ApplicationController
  layout "countries"
  def login

  end

  def authenticate_login
    authenticate = User.authenticate(params[:username], params[:password])
    if authenticate
      session[:user_id] = authenticate.id
      redirect_to root_path
    else
      flash[:notice] = "Invalid Username and Password"
      render 'login'
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to root_path
  end

end
