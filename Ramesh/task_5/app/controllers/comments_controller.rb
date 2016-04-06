class CommentsController < ApplicationController
  layout "countries"  
  def index      
    @comments = Comment.all(:include => :user,:conditions => {:comments => {:country_id => params[:country_id]}} )
    @comments = User.all(:joins => :comments,:select => 'comments.commentbody,users.username',:conditions => {:comments => {:country_id => params[:country_id]}})    
   respond_to do |format|      
      format.json  { render :json => @comments }
    end 
  end

  def show  	
  	@comment = Comment.find(params[:id])
  end

  def new
  	@country = Country.find(params[:country_id])
  	@comment = @country.comments.build
  end

  def create
  	@country = Country.find(params[:country_id])
    @comment = @country.comments.build(:user_id => params[:user_id], :commentbody => params[:commentbody])
    # @user = User.find(params[:user_id]).username
  	if @comment.save
      @comment = User.all(:joins => :comments,:select => 'comments.commentbody,users.username',:conditions => {:comments => {:id => @comment.id}})
     
      respond_to do |format|      
        format.json  { render :json => @comment }
      end     
    end
  end

  def countrydashboard
    @country = Comment.all(:joins => :country, :group =>"country_id",:select => "countryname,country_id,count(*) as country_count", :order => "country_count DESC", :limit => 5)
    respond_to do |format|      
      format.json  { render :json => @country }
    end
  end

  def userdashboard
    @user = Comment.all(:joins => :user, :group =>"user_id",:select => "username,user_id,count(*) as user_count", :order => "user_count DESC", :limit => 5)    
    respond_to do |format|      
      format.json  { render :json => @user }
    end
  end
end
