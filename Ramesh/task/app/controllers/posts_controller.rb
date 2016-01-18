class PostsController < ApplicationController     
  def index
    @posts = Post.all        
  end  
  def show
    @post = Post.find(params[:id])
    @post.clickcount = @post.clickcount + 1
    @post.save    
    render :layout => !request.xhr?
  end  
end