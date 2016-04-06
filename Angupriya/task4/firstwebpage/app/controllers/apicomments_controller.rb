class ApicommentsController < ApplicationController
  def create
      @counter = Counter.find(params[:apipost_id])
      @comment=@counter.comments.build(:feedback => params[:comments],:user_id => params[:id])
      saved = @comment.save!
      if saved
      respond_to do |format|
            format.json {render :json => @comment}
        end
      end
  end
 
  def topuser
    @topusers = Comment.find(:all,:joins => :user,:select => "users.name, count(*) as user_count",:group => 'users.name',:order => 'user_count desc',:limit => 2)
    respond_to do |format|
            format.json {render :json => @topusers}
    end
  end
  def topposts
    @topposts=Counter.find(:all, :order => 'count desc',:limit => 2 )
    respond_to do |format|
            format.json {render :json => @topposts}
    end
  end
  def show
    @c=Comment.find(:all,:joins => :user,:select => "users.name,comments.feedback",:conditions => {:counter_id =>13})
   respond_to do |format|
      format.json { render :json=> @c }
    end
 end
end


