class PostsController < ApplicationController

def index
@posts=Counter.all

 respond_to do |format|
    format.json { render :json=> @posts }
  end
end

end