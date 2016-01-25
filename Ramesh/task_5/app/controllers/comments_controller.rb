class CommentsController < ApplicationController
  layout "countries"
  def index
    @country = Country.find(params[:country_id])
    @comments = @country.comments.paginate( :page => params[:page], :per_page => 2)
  end

  def show
  	@country = Country.find(params[:country_id])
  	@comment = @country.comments.find(params[:id])
  end

  def new
    if (session[:user_id])
  	@country = Country.find(params[:country_id])
  	@comment = @country.comments.build
    else
      flash[:notice] = "You Must Login Then Only You created Comment"
      redirect_to '/login'
    end
  end

  def create
  	@country = Country.find(params[:country_id])
    @comment = @country.comments.build(:name => current_user.username, :commentbody => params[:comment][:commentbody])
  	if @comment.save
      flash[:notice] = 'Comment was successfully saved.'
      redirect_to country_comment_url(@country, @comment)
    end
  end

end
