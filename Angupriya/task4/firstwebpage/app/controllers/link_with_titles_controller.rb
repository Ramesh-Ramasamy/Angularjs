class LinkWithTitlesController < ApplicationController
  def new

  @link = LinkWithTitle.new
  render :layout => false
   end

  def index
    
    @link= LinkWithTitle.all
  end

  def create
    @link = LinkWithTitle.new(params[:link_with_title])
    if @link.save
      redirect_to :root
    else
      render :action => "new" 
    end
  end
  
  def show
    @counter = LinkWithTitle.find(params[:id])
    @counter.count_value
    @tc=Counter.total_value
    render :layout => false 
  end

  def dash
  end
end
