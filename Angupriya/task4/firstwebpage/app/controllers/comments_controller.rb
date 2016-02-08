class CommentsController < ApplicationController
  before_filter :authentication,:only => [:new,:create]
  
  def new
  	@counter= Counter.find(params[:counter_id])
    @comment=@counter.comments.build
  end
  def index
   
  end

  def create 
  
   @counter = Counter.find(params[:counter_id])
   @comment=@counter.comments.build(:feedback=>params[:comment][:feedback],:user_id => session[:user_id])
    if @comment.save
   flash[:notice]='comments successfully posted'
   redirect_to counter_comments_path(@counter)
    else
      flash[:notice]=session[:user_id]
      redirect_to counter_comments_path(@counter)
   end
  end

  def show
  @count=Counter.find(params[:counter_id])
  @comments=@count.comments.paginate(:page => params[:page],:per_page => 2)
  end

  def dashboard
    # @topusers = Comment.count(:group => :user_id) 
    @topusers = Comment.find(:all,:joins => :user,:select => "users.name, count(*) as user_count",:group => 'users.name',:order => 'user_count desc',:limit => 2)
     @topcounters=Counter.find(:all, :order => 'count desc',:limit => 2 )

    end
end
