class UsersController < ApplicationController
	before_filter :save_login_state ,:only =>[:login,:login_attempt]
	 
	def home
  
  end
  
  def login
	end

	def login_attempt
	authenticate_user=User.authenticate(params[:Username],params[:login_pass])
		if authenticate_user
		session[:user_id]=authenticate_user.id
		flash[:notice] ='successfully logged in ..u can enter the comments'
		redirect_to url_for(:action => 'home')	
		else	
		flash[:notice]="invalid combination of username or password..Retry"
		redirect_to(:controller => 'users',:action => 'login')
		end
	end
	
	def new
		@user=User.new
	end
	
	def create
	@user=User.new(params[:user])
		if @user.save
			flash[:notice]='successfully registered'
			redirect_to (:controller => 'users',:action => 'home')
		else
			render 'new'
		end
	end
end
