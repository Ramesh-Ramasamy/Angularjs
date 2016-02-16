
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
   @comment=@counter.comments.build(:feedback=>params[:comment][:feedback],:user_id => Rails.cache.read('user_id'))
    if @comment.save
      redirect_to :root
    else
      # flash[:notice]=session[:user_id]
      redirect_to counter_comments_path(@counter)
   end
  end

  def show
   @c=Comment.all(:include => :user,:conditions => {:counter_id => params[:counter_id]})
   @comments=@c.paginate(:page => params[:page],:per_page => 2)
 
  end

  def dashboard
    @topusers = Comment.find(:all,:joins => :user,:select => "users.name, count(*) as user_count",:group => 'users.name',:order => 'user_count desc',:limit => 2)
    @topcounters=Counter.find(:all, :order => 'count desc',:limit => 2 )
    @topcomment=Comment.find(:all,:joins => :counter,:select => "counters.name, count(*) as comment_count",:group => 'counter_id',:order => 'comment_count desc',:limit => 2)
  end
end
