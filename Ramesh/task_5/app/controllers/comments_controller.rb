class CommentsController < ApplicationController
  layout "countries"
  before_filter :check_user, :only =>[:new, :create]
  def index
    @country = Country.find(params[:country_id])
    @comments = @country.comments.paginate( :page => params[:page], :per_page => 3)
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
    @comment = @country.comments.build(:name => current_user.username, :commentbody => params[:comment][:commentbody])
  	if @comment.save
      flash[:notice] = 'Comment was successfully saved.'
      redirect_to country_comment_url(@country, @comment)
    end
  end

  def check_user
    if (!current_user)
      flash[:notice] = "You Must Login Then Only You Post a Comment"
      redirect_to '/login'
    end
  end

end
