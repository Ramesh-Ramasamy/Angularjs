class CommentsController < ApplicationController
  before_filter :authentication,:only => [:new,:create]
  
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
   @comment=@counter.comments.build(:name=>current_user.name,:feedback=>params[:comment][:feedback])
   
   if @comment.save
   flash[:notice]='comments successfully posted'
   redirect_to counter_comments_path(@counter)
   end
 end

  def show
  @count=Counter.find(params[:counter_id])
  @comments=@count.comments.paginate(:page => params[:page],:per_page => 2)
  end
end
