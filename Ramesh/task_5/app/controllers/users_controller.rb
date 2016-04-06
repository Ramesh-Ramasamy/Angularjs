  class UsersController < ApplicationController
  
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create    
    @user = User.new
    @user.username = params[:username]
    @user.password = params[:password]
    if @user.save
      session[:user_id] = @user.id
      session[:username] = @user.username     
      respond_to do |format|      
        format.json  { render :json => @user }
      end
        flash.now[:notice] = 'User Registered Successfully'    
    else
        respond_to do |format|  
         format.json  { render :json => @user.errors }
        end
    end

  end

end
