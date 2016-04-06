class ApiusersController < ApplicationController


def create
  @user=User.new
  @user.name = params[:name]
  @user.password = params[:password]
  @user.save
  session[:user_id]=@user.id
  session[:username]=@user.name 
  respond_to do |format|      
    format.json  { render :json => @user }
  end  
end
end
