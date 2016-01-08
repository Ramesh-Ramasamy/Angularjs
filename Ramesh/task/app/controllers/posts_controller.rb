class PostsController < ApplicationController 
  
  # GET /posts
  # GET /posts.xml
  def index
    @posts = Post.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @posts }
    end
  end

  # GET /posts/1
  # GET /posts/1.xml
  
  def show
    @post = Post.find(params[:id])
    @post.clickcount = @post.clickcount + 1
    @post.save    
    respond_to do |format|
      format.html {render :layout =>false}
      format.xml  { render :xml => @post }
      format.js {render :layout =>false}
    end
  end  
end
