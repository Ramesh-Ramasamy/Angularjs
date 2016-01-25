class UsersController < ApplicationController
  layout "countries"
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "You signed up successfully"
      redirect_to(users_path)
    else
      flash[:notice] = "Form is invalid"
      render "new"
    end

  end

end
