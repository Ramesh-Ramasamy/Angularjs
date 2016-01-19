class CommentsController < ApplicationController
  def index 
    @country = Country.find(params[:country_id])	
    @comments = @country.comments.all
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
  	@comment = @country.comments.build(params[:comment]) 	
  	if @comment.save
      flash[:notice] = 'Comment was successfully saved.'
      redirect_to country_comment_url(@country, @comment)
    end  	
  end
  
end
