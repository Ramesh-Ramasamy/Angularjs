class UsersController < ApplicationController
	 
	def home
  
  end
  
  def login
	end

	def login_attempt	
		authenticate_user=User.authenticate(params[:Username],params[:login_pass])
		if authenticate_user
			Rails.cache.write('user_id', authenticate_user.id)
			Rails.cache.write('user_name',authenticate_user.name)
			redirect_to :root
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
