class CommentsController < ApplicationController
  layout "countries"
  before_filter :check_user, :only =>[:new, :create]
  def index
    @country = Country.find(params[:country_id])
    @comments = User.all(:joins => :comments,:select => 'comments.commentbody,users.username',:conditions => {:comments => {:country_id => @country.id}})
    @comments = @comments.paginate(:page => params[:page], :per_page => 3)
  end

  def show
  	@country = Country.find(params[:country_id])
  	@comment = @country.comments.find(params[:id])
  end

  def new
  	@country = Country.find(params[:country_id])
  	@comment = @country.comments.build
  end

  def create
  	@country = Country.find(params[:country_id])
    @comment = @country.comments.build(:user_id => session[:user_id], :commentbody => params[:comment][:commentbody])
  	if @comment.save
      flash[:notice] = 'Comment was successfully saved.'
      redirect_to country_comment_url(@country, @comment)
    else
      flash[:notice] = 'Comment was not successfully saved.'      
      render 'new'
    end
  end

  def check_user
    if (!current_user)
      flash.now[:notice] = "You Must Login Then Only You Post a Comment"
      redirect_to '/login'
    end
  end

end
