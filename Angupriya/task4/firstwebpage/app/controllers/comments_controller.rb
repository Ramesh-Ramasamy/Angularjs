class CommentsController < ApplicationController

  def new
  	@counter= Counter.find(params[:counter_id])
    @comment=@counter.comments.build

  end
  def index
    @count=Counter.find(params[:counter_id])
    @comments=@count.comments
  end
  def create
   @counter = Counter.find(params[:counter_id])
   @comment=@counter.comments.build(params[:comment])
   if @comment.save
   redirect_to counter_comments_path(@counter)
    end
 end
 def show
  @count=Counter.find(params[:counter_id])
  @comments=@count.comments
end


end
