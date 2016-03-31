class ApisessionsController < ApplicationController
  
  def login
  end 
  def authenticate_user
    
    @authenticate = User.authenticate(params[:username], params[:password])
    if @authenticate
      session[:user_id] = @authenticate.id
      session[:username] = @authenticate.username    
       respond_to do |format|      
        format.json  { render :json => @authenticate }
       end    
    end
  end
  def userdetails
    @user = Hash.new 
    if session[:user_id]
      @user = {"user_id" => session[:user_id], "username" => session[:username]  }
    # else
    #   @user = {"user_id" => "11", "username" => "Kanth"  }
    end

    respond_to do |format|      
        format.json  { render :json => @user }
       end
  end
  def logout
    session[:username] = nil
    redirect_to root_path
  end

end
