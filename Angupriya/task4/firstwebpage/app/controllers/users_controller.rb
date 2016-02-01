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
		redirect_to(request.referer	,:notice=> 'successfully logged in ..u can enter the comments')	
		else
		flash[:notice]="invalid combination of username or password"
		redirect_to(new_user_path)
		end
	end
	
	def new
		@user=User.new
	end
	
	def create
	@user=User.new(params[:user])
		if @user.save
			redirect_to(request.referer,:notice => 'successfully registered')
		end
	end
end
