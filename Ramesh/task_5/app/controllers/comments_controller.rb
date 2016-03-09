class CommentsController < ApplicationController
  layout "countries"
  before_filter :check_user, :only =>[:new, :create]
  def index      
    @comments = Comment.all(:include => :user,:conditions => {:comments => {:country_id => params[:country_id]}} )
    #@comments = User.all(:joins => :comments,:select => 'comments.commentbody,users.username',:conditions => {:comments => {:country_id => @country.id}})
    @comments = @comments.paginate(:page => params[:page], :per_page => 3)
    respond_to do |format|
      
      format.json
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
    @comment = @country.comments.build(:user_id => Rails.cache.read("user_id"), :commentbody => params[:comment][:commentbody])
  	if @comment.save
      flash[:notice] = 'Comment was successfully saved.'
      redirect_to country_comment_url(@country, @comment)
    else
      flash[:notice] = 'Comment was not successfully saved.'      
      render 'new'
    end
  end

  def dashboard
    @country = Comment.all(:joins => :country, :group =>"country_id",:select => "countryname,country_id,count(*) as country_count", :order => "country_count DESC", :limit => 5)
    @user = Comment.all(:joins => :user, :group =>"user_id",:select => "username,user_id,count(*) as user_count", :order => "user_count DESC", :limit => 5)
  end

end
